import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { motion } from 'framer-motion'

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
    const handleFeedback = () => {
        console.log(hello);
    }

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
                        <th>Total Enroll</th>
                        <th>Fee</th>
                        <th>Status</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        pendingClasses.map((pendingClass, index) => <tr key={pendingClass._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>{pendingClass.name}</td>
                            <td>{pendingClass.category}</td>
                            <td className='ps-10'>{pendingClass.enrolledCount}</td>
                            <td>$ {pendingClass.fee}</td>
                            <td className='capitalize'>{pendingClass.status}</td>
                            <motion.div>
                                <td><button onClick= {handleFeedback}className="text-sm bg-orange-400 py-2 px-4 rounded-lg">Feedback</button></td>
                            </motion.div>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default PendingClass;