import React from 'react';
import img1 from '../../assets/male1 (2).jpg'



const Instructor = ({ item }) => {

    const { name, image, email, bio } = item;
    return (
        <>
            <div className="card w-96 mx-auto shadow-xl">
                <figure><img className='rounded-e-full rounded-t-full'src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2  className="card-title">{name}</h2>
                    <p>{bio.slice(0,95)}....</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-100">Explore</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instructor;