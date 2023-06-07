import React from 'react';
import bg from '/bg.jpg'

const Class = ({ item }) => {
    const { name, details, image, availableSeats } = item;
    return (
        <div className="card card-side bg-amber-50 shadow-xl">
            <figure className='w-1/2'><img className='rounded-xl h-[95%]' src={image} alt="Movie" /></figure>
            <div className="card-body w-1/2">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default Class;