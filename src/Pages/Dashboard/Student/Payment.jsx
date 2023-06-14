import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const selectedClass = useLocation().state;
    // console.log(selectedClass);


    return (
        <div>
            <Helmet>
                <title>Dancewave | Payment </title>
            </Helmet>
            <h2 className='text-center font-bold text-2xl underline text-orange-500'>Accept A Payment</h2>
            <div>
                {/* <Elements stripe={stripePromise}>
                    <CheckoutForm selectedClass={selectedClass} fee={fee}></CheckoutForm>
                </Elements> */}
                <Elements stripe={stripePromise}>
                    <CheckoutForm fee={selectedClass.fee} selectedClass={selectedClass}></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;