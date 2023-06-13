import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useEffect } from 'react';

const CheckoutForm = ({selectedClass, fee}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState('');
  const [message, setMessage] = useState(null);
  const [isProcessing, setProcessing] = useState(false);


  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   if (price > 0) {
  //    fetch('/create-payment-intent', { price })
  //       .then(res => {
  //         console.log(res.data.clientSecret);
  //         setClientSecret(res.data.clientSecret);

  //       })
  //   }

  // }, [price, axiosSecure]);
//   useEffect(() => {
//     fetch('http://localhost:5000/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({})

//     })
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// }, [])
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setProcessing(true)
  }
  return (
    <div className='card w-2/3 ms-10 '>
      <div className=''>
      <div className='space-y-2 py-6 bg'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='studentname' className='block text-gray-600'>
                Student Name
              </label>
              <input
                className='w-1/3 px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100'
                name='studentname'
                id='studentname'
                type='text'
                value={user.displayName}
                readOnly
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='studentEmail' className='block text-gray-600'>
                Email
              </label>
              <input
                className='w-1/3 px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100'
                name='studentEmail'
                id='studentEmail'
                type='text'
                value={user.email}
                readOnly
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='bilingAddress' className='block text-gray-600'>
                Billing Address
              </label>
              <input
                className='w-1/3 px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100 '
                name='bilingAddress'
                id='bilingAddress'
                type='text'
                placeholder='Address'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='phoneNumber' className='block text-gray-600'>
                Phone Number
              </label>
              <input
                className='w-1/3 px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100'
                name='phoneNumber'
                id='phoneNumber'
                type='text'
                placeholder='Phone no.'
                required
              />
            </div>
          </div>
        <form id='' onSubmit={handleSubmit}>
          <CardElement className='py-10 px-auto border border-orange-200  rounded-md'></CardElement>
          <button disabled={isProcessing} className="w-1/3 h-fit mt-10 py-4 btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-200 hover:bg-orange-400 justify-center" id='submit'>
            <span>
              {isProcessing ? 'Processing' : 'Pay Now'}
            </span>
            {/* Pay Now */}
          </button>
          {message && <div>{message}</div>}
        </form>
         
        
      </div>
    </div>
  );
};

export default CheckoutForm;