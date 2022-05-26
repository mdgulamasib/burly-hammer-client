import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

    const [user] = useAuthState(auth)
    const [myOrders, setMyOrder] = useState([]);
    const [reload, setIsReload] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `https://young-everglades-39818.herokuapp.com/myorders?email=${email}`;
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
    }, [reload])



    const handleItemDelete = id => {
        const url = `https://young-everglades-39818.herokuapp.com/myorders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
            })

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
                                {(myOrder.totalPrice && !myOrder.paid) && <Link to={`/dashboard/payment/${myOrder._id}`}><button className='btn btn-xs btn-primary'>pay now</button></Link>}
                                {(myOrder.totalPrice && !myOrder.paid) && <label for="my-modal-3" class="btn btn-xs btn-primary mx-2">Delete</label>}

                                {(myOrder.totalPrice && myOrder.paid) && <div>
                                    <p><span className='text-success'>Paid</span></p>
                                    <p>XID: <span className='text-success'>{myOrder.transactionId}</span></p>
                                </div>}

                                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are you sure about cancel this order?</h3>
                                        <p class="py-4">Cancellation is permanent, you can't go reverse once the order is cancel. Select confirm to Confirm, or cancel the operation!!!</p>
                                        <div class="modal-action">
                                            <label for="my-modal-3" class="btn" onClick={() => handleItemDelete(myOrder._id)}>Confirm</label>
                                            <label for="my-modal-3" class="btn">Cancel</label>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;