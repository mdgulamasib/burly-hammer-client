import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth)
    const [myOrders, setMyOrder] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `http://localhost:5000/myorders?email=${email}`;
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setMyOrder(data))
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
            }
        }
        fetchMyAPI()
    }, [user?.email])




    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map((myOrder, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{myOrder.productN}</td>
                            <td>{myOrder.purchaseQ}</td>
                            <td>${myOrder.totalPrice}</td>
                            <td>{myOrder.purchaseQ}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;