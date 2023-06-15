import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
// import { motion } from 'framer-motion'

const PendingClass = () => {
    const [pendingClasses, setPendingClasses] = useState([]);
    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        fetch(`https://dancewave-server-side.vercel.app/pendingclasses/${user.email}`,
         {
            method: 'GET',
            headers: {
                'content-Type': 'application/json'
            },
        }
        )
            .then(res => res.json())
            .then(data => {
                setPendingClasses(data);
            })
    }, []);
    console.log(pendingClasses);
    // const handleFeedback = () => {
    //     console.log(hello);
    // }

    return (
        <div>
            <h2 className='text-2xl text-center mb-4 font-semibold'>My Pending Classes</h2>
            <table className="table w-full bg-orange-100">
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
                            <td><button onClick={() => window.my_modal_5.showModal()} className="text-sm bg-orange-400 py-2 px-4 rounded-lg">Feedback</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">✕</button>
                    <div className='flex flex-col'>
                        <h2 className='mb-2 mt-0'>Give Us Your Valuable Feedback!</h2>
                        <textarea className="textarea textarea-warning mt-2" placeholder="Feedback"></textarea>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-outline btn-sm border-t-4 border-b-4 bg-orange-400 lg:w-2/4 my-2 py-2 h-fit">Send Feedback</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default PendingClass;