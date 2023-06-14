import React, { useContext, useEffect, useState } from 'react';
import danceimg from '../../../assets/salsa2.jpg';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const ManageClasses = () => {
    const { loading, setLoading } = useContext(AuthContext);
    // const [pendingClasses, setPendingClasses] = useState([]);
    const [disabled, setDisbled] = useState(false);
    // const { data: pendingClasses = [], refetch } = useQuery(['pendingClasses'], async () => {
    //     const response = await fetch('http://localhost:5000/dashboard/pendingclasses',)
    //     return response.json();

    // })

    const[axiosSecure] = useAxiosSecure();
    const { data: pendingClasses = [], refetch } = useQuery(['pendingClasses'], async () => {
        const res = await axiosSecure.get('/dashboard/pendingclasses')
        return res.data;
    })
    // useEffect(() => {
    //     fetch('http://localhost:5000/dashboard/pendingclasses')
    //         .then(res => res.json())
    //         .then(data => {
    //             setPendingClasses(data);
    //         })
    // }, []);

    const handleApprove = (manageClass) => {
        setDisbled(true);
        setLoading(false);
        fetch(`http://localhost:5000/dashboard/approvedclasses/${manageClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This class is now approved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        fetch('http://localhost:5000/danceclasses', {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(manageClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.insertedId) {
                //     Swal.fire({
                //         position: 'top-end',
                //         icon: 'success',
                //         title: 'Class Submitted Successfully',
                //         showConfirmButton: false,
                //         timer: 1500
                //     })
                // }
            })
    }
    const handleDeny = (manageClass) => {
        setDisbled(true)
        fetch(`http://localhost:5000/dashboard/deniedclasses/${manageClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'This class is Denied',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div>
            <table className="table w-full bg-orange-100">
                {/* head */}
                <thead className='bg-orange-300 '>
                    <tr>
                        <th></th>
                        <th>Class Image</th>
                        <th>Instructor</th>
                        <th>Class Name</th>
                        <th>Available Seats</th>
                        <th>Fee</th>
                        <th>Status</th>
                        <th className='text-center'>Action</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {/* row */}
                    {
                        pendingClasses.map((pendingClass, index) => <tr key={pendingClass._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td><img className='w-20 h-20 rounded-full' src={pendingClass.image ? pendingClass.image : danceimg} alt="" /></td>
                            <td>{pendingClass.instructorName}</td>
                            <td>{pendingClass.name}</td>
                            <td className='ps-10'>{pendingClass.availableSeats}</td>
                            <td>{pendingClass.fee}</td>
                            <td className='capitalize'>{pendingClass.status}</td>
                            <td className=''>{pendingClass.status === 'pending' ?
                                <div className='flex gap-2'>
                                    <button onClick={() => handleApprove(pendingClass)} className="text-sm bg-orange-400 py-2 px-4 rounded-lg" >Approve</button>
                                    <button onClick={() => handleDeny(pendingClass)} className="text-sm bg-orange-400 py-2 px-4 rounded-lg" >Deny</button>
                                </div> :
                                <div className='flex gap-2'>
                                    <button className="text-sm bg-orange-200 py-2 px-4 rounded-lg" disabled>Approve</button>
                                    <button className="text-sm bg-orange-200 py-2 px-4 rounded-lg" disabled>Deny</button>
                                </div>
                            }</td>
                            <td><button onClick={() => window.my_modal_5.showModal()} className="text-sm bg-orange-400 py-2 px-4 rounded-lg">Feedback</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-4">✕</button>
                    <div className='flex flex-col'>
                        <h2 className='mb-2 mt-0'>Give Feedback About This Class!</h2>
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

export default ManageClasses;