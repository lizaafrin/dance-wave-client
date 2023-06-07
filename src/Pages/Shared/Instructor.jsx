import React from 'react';
import img1 from '../../assets/male1 (2).jpg'

const Instructor = ({ item }) => {
    const { name, image, email, bio } = item;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{bio.slice(0,95)}....</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">View Classes</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instructor;