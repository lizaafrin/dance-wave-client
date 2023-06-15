import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const AddClass = () => {
    const categories = ['Salsa', 'Ballet', 'Classic', 'Hip-Hop'];

    const { user } = useContext(AuthContext);
    
    const instructorName = user.displayName;


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target[2].value;
        const image = e.target[3].value
        const category = e.target[4].value;
        const fee = parseFloat(e.target[5].value);
        const availableSeats = parseInt(e.target[6].value);
        const details = e.target[7].value;
        const students = [];
        const enrolledCount = students.length;
        const newClass = {name, category, instructorName, availableSeats, image, fee, details, status: 'pending', instructorEmail: user.email, enrolledCount, students}
        console.log(newClass);
        fetch('https://dancewave-server-side.vercel.app/pendingclasses', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(newClass)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // refetch();
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Submitted Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else if (data.message == 'Class already exists') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'You Have Already Submitted This Class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        
    };

    return (
        <div className='w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='instructorname' className='block text-gray-600'>
                                Instructor Name
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md '
                                name='instructorname'
                                id='instructorname'
                                type='text'
                                value={user?.displayName}
                                readOnly
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='instructoremail' className='block text-gray-600'>
                                Instructor Email
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md '
                                name='instructoremail'
                                id='instructoremail'
                                type='text'
                                value={user?.email}
                                readOnly
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='classtitle' className='block text-gray-600'>
                                Class Title
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md '
                                name='classtitle'
                                id='classtitle'
                                type='text'
                                placeholder='Class Title'
                                required
                            />
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='classimage' className='block text-gray-600'>
                                Class Image
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md '
                                name='classimage'
                                id='classimage'
                                type='text'
                                placeholder='Class Image URL'
                                required
                            />
                        </div>
                    </div>
                    
                    <div className='space-y-6'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='category' className='block text-gray-600'>
                                Category
                            </label>
                            <select
                                required
                                className='w-full px-4 py-3 border border-orange-200 focus:outline-orange-400 rounded-md'
                                name='category'
                            >
                                {categories.map((category, index) => (
                                    <option value={category} key={index}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='flex justify-between gap-2'>
                            <div className='space-y-1 text-sm'>
                                <label htmlFor='fee' className='block text-gray-600'>
                                    Fee
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md '
                                    name='fee'
                                    id='fee'
                                    type='number'
                                    placeholder='$ Fee'
                                    required
                                />
                            </div>

                            <div className='space-y-1 text-sm'>
                                <label htmlFor='availableseats' className='block text-gray-600'>
                                    Available Seats
                                </label>
                                <input
                                    className='w-full px-4 py-3 text-gray-800 border border-orange-200 focus:outline-orange-400 rounded-md '
                                    name='availableseats'
                                    id='availableseats'
                                    type='number'
                                    placeholder='Available Seats'
                                    required
                                />
                            </div>
                        </div>

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='description' className='block text-gray-600'>
                                Description
                            </label>

                            <textarea
                                id='description'
                                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-orange-200 focus:outline-orange-400 '
                                name='description'
                            ></textarea>
                        </div>
                    </div>
                </div>

                <button type='submit' className="w-full h-fit mt-10 py-4 btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-200 hover:bg-orange-400 ">Add Class</button>
            </form>
        </div>
    )
}


export default AddClass;