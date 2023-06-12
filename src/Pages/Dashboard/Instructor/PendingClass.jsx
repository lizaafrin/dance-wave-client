import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const PendingClass = () => {
    
    const [pendingClasses, setPendingClasses] = useState([]);
    const { user, userData, loading } = useContext(AuthContext);
    const currentUser = userData.find(k => user?.email === k.email);
    useEffect(() => {
        fetch(`http://localhost:5000/pendingclasses/${currentUser.email}`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    setPendingClasses(data);
                })
    }, []);
    console.log(pendingClasses);

    return (
        <div>
            <h2 className='text-2xl text-center mb-4 font-semibold'>My Pending Classes</h2>
            <table className="table w-full lg:ms-10 bg-orange-100">
                {/* head */}
                <thead className='bg-orange-300 '>
                    <tr>
                        <th></th>
                        <th>Class Name</th>
                        <th>Category</th>
                        <th>Available Seats</th>
                        <th>Fee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {/* row */}
                    {
                        pendingClasses.map((pendingClass, index) => <tr key={pendingClass._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>{pendingClass.name}</td>
                            <td>{pendingClass.category}</td>
                            <td className='ps-10'>{pendingClass.availableSeats}</td>
                            <td>$ {pendingClass.fee}</td>
                            <td className='capitalize'>{pendingClass.status}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PendingClass;