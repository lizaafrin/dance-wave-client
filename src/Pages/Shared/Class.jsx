import React from 'react';
import bg from '/bg.jpg'

const Class = ({ item }) => {
    const { name, details, image, fee } = item;
    return (
        <div className="card card-side bg-amber-50 shadow-xl">
            <figure className='w-1/2'><img className='rounded-xl h-[95%]' src={image} alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p className='font-semibold'>Course Fee: {fee}$</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-100">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default Class;