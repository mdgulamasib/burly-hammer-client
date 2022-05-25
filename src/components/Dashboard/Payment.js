import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3EkWCdsIiQP6dkscAPapJ90ufNVXdM2UNquBjJw7x0p33NWgHTl2pRMVAhgYIUqArlhLzQuyZGPfv07DMB4Vjl00N7otV0Pq');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/payment/${id}`

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }





    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.productN}</h2>
                    <p>Purchase Quantity: <span className='text-orange-700'>{order.purchaseQ}</span> </p>
                    <p>Payment Due: ${order.totalPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                {<div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>}
            </div>
        </div>
    );
};

export default Payment;