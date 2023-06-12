import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAmazonPay, FaAngular, FaAward, FaIdBadge, FaInfo, FaTrashAlt, FaUserAltSlash, FaUserGraduate, FaUserShield, FaUserSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useState } from 'react';

const AllUsers = () => {
    // const [disabled, setDisabled] = useState(false);
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await fetch('http://localhost:5000/users',)
        return response.json();

    })
    console.log(users);
    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };

    const handleMakeinstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                //   setDisabled(true);
            }
        })
    };

    
    return (
        <div>
            <Helmet>
                <title>Dancewave | All Users</title>
            </Helmet>
            <h2 className='text-2xl text-center mb-4 font-semibold'>Total users:{users.length}</h2>
            <table className="table w-full lg:ms-10 bg-orange-100">
                {/* head */}
                <thead className='bg-orange-300 '>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Student Email</th>
                        <th>Role</th>
                        <th>Make Instructor</th>
                        <th>Make Admin</th>
                        <th>Action</th>
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

export default AllUsers;