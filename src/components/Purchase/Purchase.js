import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Purchase = () => {
    const { id } = useParams();
    const nameRef = useRef('')
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const addressRef = useRef('');
    const purchaseRef = useRef('');


    const [user] = useAuthState(auth);
    const [orderQ, setorderQ] = useState()
    let orderQError;

    const [loadPurchase, setLoadPurchase] = useState({});
    const [reload, setIsReload] = useState(true)
    const totalPrice = orderQ * loadPurchase.price


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLoadPurchase(data));
    }, [reload]);


    const handleAddOrder = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const productN = loadPurchase.name;
        const purchaseQ = orderQ;
        const totalPrice = orderQ * loadPurchase.price
        const paid = false

        console.log(name, email, phone, address, purchaseQ, totalPrice, paid)



        const order = { name, email, phone, address, productN, purchaseQ, totalPrice, paid };

        // send data to insert orders
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                alert('Item added successfully!!!');
                event.target.reset();
            })

        const newAvailableQ = loadPurchase.availableQ - orderQ
        const updateQ = { newAvailableQ };

        // sending data for updating available quantity
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateQ)
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
            })


    }

    const handleOrderQ = (event) => {
        setorderQ(event.target.value)
    }
    console.log(orderQ)
    const enabled = loadPurchase.availableQ >= orderQ && orderQ >= loadPurchase.minimumQ;

    if (loadPurchase.availableQ <= orderQ) {
        orderQError = <p className='text-red-700 text-sm'>Order quantity can't be bigger than available quantity {loadPurchase.availableQ}</p>
    }
    else if (orderQ <= loadPurchase.minimumQ) {
        orderQError = <p className='text-red-700 text-sm'>Order quantity can't be less than minimum quantity {loadPurchase.minimumQ}</p>
    }



    return (
        <div className=" my-24">
            <h2 className="text-3xl font-bold text-center text-primary uppercase mb-8"><span className='text-black'>Purchase</span> Details
            </h2>
            <div className='md:mx-auto mx-10 md:w-2/4'>
                <div className="card bg-base-200 shadow-xl px-10">
                    <div className='md:flex justify-center'>
                        <div className='md:mt-12'>
                            <figure>
                                <img src={loadPurchase.image} alt="img" className="rounded-md" width="250" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{loadPurchase.name}</h2>
                                <p>{loadPurchase.description}</p>
                                <small>Available: {loadPurchase.availableQ}</small>
                                <small>Minimum Order: {loadPurchase.minimumQ}</small>
                                <p>Unit Price: <span className='text-primary font-bold'>${loadPurchase.price}</span></p>
                            </div>
                        </div>

                        <div>
                            <div className="md:mt-10">
                                <form onSubmit={handleAddOrder} className="md:w-72" >
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2" for="username">
                                            Your Name
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref={nameRef} value={user.displayName} readOnly required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2" for="email">
                                            Email
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" ref={emailRef} value={user.email} required readOnly />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2" for="email">
                                            Phone Number
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" ref={phoneRef} placeholder="+0123456789" required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2" for="email">
                                            Delivery Address
                                        </label>
                                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="address" type="address" ref={addressRef} placeholder="sheikhergaon, Ramsree-3301, Habaganj, Bangladesh" required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2" for="email">
                                            Order Quantity
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="purchaseQ" type="number" placeholder={`Min ${loadPurchase.minimumQ} max ${loadPurchase.availableQ}`} onChange={handleOrderQ} required />
                                        {orderQError}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-bold mb-2" for="email">
                                            Total Price
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="purchaseQ" type="number" ref={purchaseRef} placeholder={`${totalPrice}`} readOnly required />
                                    </div>

                                    <div className="flex items-center">
                                        <button className={enabled === true ? 'bg-primary uppercase mb-8 hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' : 'bg-gray-300 mb-8 uppercase text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'} type="submit" disabled={!enabled}>
                                            Add Order
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div></div>
    );
};

export default Purchase;