import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ManageAllOrders = () => {

    const [user] = useAuthState(auth)
    const [myOrders, setMyOrder] = useState([]);
    const [reload, setIsReload] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `http://localhost:5000/allorders`;
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



    const handleItemDelete = id => {
        const proceed = window.confirm('Deleting Items is Permanent! Think twice before pressing OK...');
        if (proceed) {
            const url = `http://localhost:5000/myorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setIsReload(!reload)
                })
        }
    }





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
                            <td>
                                {(!myOrder.ship && !myOrder.paid) && <button className='btn btn-xs btn-blue-400 mx-2'>unPaid</button>}

                                {(!myOrder.ship && !myOrder.paid) && <button className='btn btn-xs btn-primary mx-2' onClick={() => handleItemDelete(myOrder._id)}>Delete</button>}


                                {(myOrder.paid && !myOrder.ship) && <button className='btn btn-xs btn-primary mx-2'/*  onClick={() => handleItemShiped(myOrder._id)} */>Ship</button>}

                                {(myOrder.paid && myOrder.ship) && <button className='btn btn-xs btn-blue-400 mx-2'>Shipped</button>}

                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div >
    );
};

export default ManageAllOrders;