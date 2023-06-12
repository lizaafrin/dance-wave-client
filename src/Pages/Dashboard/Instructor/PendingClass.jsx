import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const PendingClass = () => {
    
    const [pendingClasses, setPendingClasses] = useState([]);
    const { user, userData } = useContext(AuthContext);
    const currentUser = userData.find(k => user?.email === k.email);
    useEffect(() => {
        fetch(`http://localhost:5000/pendingclasses/${currentUser.email}`, {
                method: 'GET',
                headers: {
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(newClass)
            })
                .then(res => res.json())
                .then(data => {
                    setPendingClasses(data)
                })
    }, [pendingClasses]);

    return (
        <div>
            <h2 className='text-2xl text-center mb-4 font-semibold'>Total users:{users.length}</h2>
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
                        users.map((user, index) => <tr key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='capitalize'>{user.role}</td>
                            <td className='ps-10'> 
                            {user.role === 'student' ?
                                <button onClick={() => handleMakeinstructor(user)} className=" text-xl bg-orange-400 py-2 px-4 rounded-lg"><FaIdBadge></FaIdBadge></button> 
                                : 
                                user.role === 'instructor' || user.role === 'admin' ?
                                <button className=" text-xl bg-orange-200 py-2 px-4 rounded-lg" disabled><FaIdBadge></FaIdBadge></button> : 'N/A'
                            }</td>
                            <td className='ps-10 flex'>
                                {user.role != 'admin' ?
                                <button onClick={() => handleMakeAdmin(user)} className="text-xl bg-orange-400 py-2 px-4 rounded-lg"><FaAward></FaAward></button> : <button className="text-xl bg-orange-200 py-2 px-4 rounded-lg " disabled><FaAward></FaAward></button>
                            }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PendingClass;