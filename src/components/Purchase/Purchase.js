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

    console.log(loadPurchase)


    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLoadPurchase(data));
    }, [reload]);


    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const purchaseQ = purchaseRef.current.value;

        console.log(name, email, phone, address, purchaseQ)

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
                <div class="card bg-base-200 shadow-xl px-10">
                    <div className='md:flex justify-center'>
                        <div className='md:mt-12'>
                            <figure>
                                <img src={loadPurchase.image} alt="img" class="rounded-md" width="250" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{loadPurchase.name}</h2>
                                <p>{loadPurchase.description}</p>
                                <small>Available: {loadPurchase.availableQ}</small>
                                <small>Minimum Order: {loadPurchase.minimumQ}</small>
                                <p>Unit Price: <span className='text-primary font-bold'>{loadPurchase.price}$</span></p>
                            </div>
                        </div>

                        <div>
                            <div class="md:mt-10">
                                <form onSubmit={handleRegister} className="md:w-72" >
                                    <div class="mb-4">
                                        <label class="block text-sm font-bold mb-2" for="username">
                                            Your Name
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref={nameRef} value={user.displayName} readOnly required />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-bold mb-2" for="email">
                                            Email
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" ref={emailRef} value={user.email} required readOnly />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-bold mb-2" for="email">
                                            Phone Number
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" ref={phoneRef} placeholder="+0123456789" required />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-bold mb-2" for="email">
                                            Delivery Address
                                        </label>
                                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="address" type="address" ref={addressRef} placeholder="sheikhergaon, Ramsree-3301, Habaganj, Bangladesh" required />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-sm font-bold mb-2" for="email">
                                            Order Quantity
                                        </label>
                                        <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="purchaseQ" type="number" ref={purchaseRef} placeholder={`Min ${loadPurchase.minimumQ} max ${loadPurchase.availableQ}`} onChange={handleOrderQ} required />
                                        {orderQError}
                                    </div>

                                    <div class="flex items-center">
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