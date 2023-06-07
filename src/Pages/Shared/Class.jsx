import React from 'react';

const Class = ({ item }) => {
    const { name, details, image,availableSeats } = item;
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p>{details}</p>
                <p >Available Seats: <span className="text-yellow-500">{availableSeats}</span></p>
            </div>
            
        </div>
    );
};

export default Class;