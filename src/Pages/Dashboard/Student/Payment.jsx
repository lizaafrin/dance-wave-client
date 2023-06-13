import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useState } from 'react';
import useSelectedClass from '../../../Hooks/useSelectedClass';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    const [clientSecret, setClientSecret] = useState('');

   

    const [selectedClass] = useSelectedClass();
    const Classfee = selectedClass.reduce((sum, item) => sum + item.fee, 0);
    const fee = parseFloat(Classfee.toFixed(2));
    return (
        <div>
            <h2 className='text-center font-bold text-2xl underline text-orange-500'>Accept A Payment</h2>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm selectedClass={selectedClass} fee={fee}></CheckoutForm>
                </Elements>

            </div>
        </div>
    );
};

export default Payment;