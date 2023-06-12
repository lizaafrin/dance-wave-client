import React, { useEffect, useState } from 'react';
import danceimg from '../../../assets/salsa2.jpg';


const ManageClasses = () => {
    const [pendingClasses, setPendingClasses] = useState([]);
    const [disabled, setDisbled] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:5000/dashboard/pendingclasses')
            .then(res => res.json())
            .then(data => {
                setPendingClasses(data);
            })
    }, []);

    const handleApprove = (manageClass) => {
        setDisbled(true);
        fetch(`http://localhost:5000/dashboard/approvedclasses/${manageClass._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'This class is now approved',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    const handleDeny = (manageClass) => {
        setDisbled(true)
        fetch(`http://localhost:5000/dashboard/approvedclasses/${manageClass._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
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
            <table className="table w-full lg:ms-10 bg-orange-100">
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

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageClasses;