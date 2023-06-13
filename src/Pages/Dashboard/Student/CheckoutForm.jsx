import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutForm = ({ selectedClass, fee }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState('');
  const [message, setMessage] = useState(null);
  const [isProcessing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: selectedClass.fee })

    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('error', error);
      setCardError(error.message);
    } else {
      setCardError('');
      // console.log('PaymentMethod', paymentMethod);
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      // setCardError()
      console.log(confirmError);
    }
    console.log('paymentIntent', paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      // save payment info to server
      const payment = {
        transactionId: paymentIntent.id,
        date: new Date(),
        enrolledClass: selectedClass.name,
        instructorEmail: selectedClass.instructorEmail,
        paymentStatus: 'Paid',
      }
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Payment Successful',
        showConfirmButton: false,
        timer: 1500
      })
      fetch('http://localhost:5000/selectedclasses', {
        method: 'PATCH',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.modifiedCount) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `You have sucessfully enrolled in ${selectedClass.name} `,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      navigate('/dashboard/selectedclasses')
    }

  }
  return (
    <div className='card my-10'>
      <div className=''>
        <div className='space-y-2 py-6 mb-10'>
          <div className='flex gap-4 justify-center'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='studentname' className='block text-gray-600'>
                Student Name
              </label>
              <input
                className='px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100'
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
                className='px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100'
                name='studentEmail'
                id='studentEmail'
                type='text'
                value={user.email}
                readOnly
                required
              />
            </div>
          </div>
          <div className='flex gap-4 justify-center'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='bilingAddress' className='block text-gray-600'>
                Billing Address
              </label>
              <input
                className='px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100 '
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
                className='  px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md bg-orange-100'
                name='phoneNumber'
                id='phoneNumber'
                type='text'
                placeholder='Phone no.'
                required
              />
            </div>
          </div>
        </div>
        <form className='flex items-center flex-col' onSubmit={handleSubmit}>
          <CardElement className='py-10 w-2/3 px-auto border border-orange-200  rounded-md'></CardElement>
          <button disabled={isProcessing} className="w-[200px] h-fit mt-10 py-4 btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-200 hover:bg-orange-400 justify-center" id='submit'>
            <span>
              {isProcessing ? 'Processing' : 'Pay Now'}
            </span>
            {/* Pay Now */}
          </button>
          {message && <div>{message}</div>}
        </form>
        {cardError && <p className="text-red-600 ml-8"> {cardError}</p>}
        {transactionId && <p className="text-green-600 ml-8"> Transaction complete with transactionId: {transactionId} </p>}


      </div>
    </div>
  );
};

export default CheckoutForm;