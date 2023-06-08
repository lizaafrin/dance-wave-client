import React from 'react';

const ClassItem = ({item}) => {
    const {name, details, image, availableSeats} = item;
    return (
        <div className="flex space-x-2 gap-10">
            <img style={{ borderRadius: '200px 200px 0px 0px' }} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className='font-bold text-xl'>{name}</h3>
                <hr className='border-orange-500'/>
                <p className=''>{details}</p>
                <p className='font-semibold'> Available Seats:<span className="text-yellow-500">{availableSeats}</span></p>
            </div>
            
        </div>
    );
};

export default ClassItem;