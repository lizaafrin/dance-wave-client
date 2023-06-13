import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import { useLocation } from 'react-router-dom';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const [clientSecret, setClientSecret] = useState('');
    const selectedClass = useLocation().state;
    // console.log(selectedClass);

   
    
    // const [selectedClass] = useSelectedClass();
    // const Classfee = selectedClass.reduce((sum, item) => sum + item.fee, 0);
    // const fee = parseFloat(Classfee.toFixed(2));
    return (
        <div>
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