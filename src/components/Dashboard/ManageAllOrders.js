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
            const url = `https://young-everglades-39818.herokuapp.com/allorders`;
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
    const handleItemShiped = id => {

        const url = `https://young-everglades-39818.herokuapp.com/myorders/${id}`;
        fetch(url, {
            method: 'PUT'
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
                        <th>Action Status</th>
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

                                {(!myOrder.ship && myOrder.paid) && <button className='btn btn-xs btn-blue-400 mx-2'>Paid</button>}

                                {(!myOrder.ship && !myOrder.paid) && <label for="my-modal-2" class="btn btn-xs btn-primary mx-2">Delete</label>}



                                {(myOrder.paid && !myOrder.ship) && <button className='btn btn-xs btn-primary mx-2' onClick={() => handleItemShiped(myOrder._id)}>Pending</button>}

                                {(myOrder.paid && myOrder.ship) && <button className='btn btn-xs btn-blue-400 mx-2'>Shipped</button>}


                                <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg">Are you sure about deleting this order?</h3>
                                        <p class="py-4">Deletion is permanent, you can't go reverse once the order is deleted. Select confirm to delete, or cancel the operation!!!</p>
                                        <div class="modal-action">
                                            <label for="my-modal-2" class="btn" onClick={() => handleItemDelete(myOrder._id)}>Confirm</label>
                                            <label for="my-modal-2" class="btn">Cancel</label>
                                        </div>
                                    </div>
                                </div>

                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div >
    );
};

export default ManageAllOrders;