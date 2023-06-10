import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAmazonPay, FaAngular, FaInfo, FaTrashAlt, FaUserAltSlash, FaUserGraduate, FaUserShield, FaUserSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await fetch('http://localhost:5000/users',)
        return response.json();

    })
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
        // fetch(`http://localhost:5000/users/instructor/${user._id}`, {
        //     method: 'PATCH'
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     if(data.modifiedCount){
        //         refetch();
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: `${user.name} is an Admin Now!`,
        //             showConfirmButton: false,
        //             timer: 1500
        //           })
        //     }
        // })
    };

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedclass/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'users has been deleted.',
                                'success'
                            )
                        }
                    })
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
                <tbody>
                    {/* row 1 */}
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td> {user.role === 'admin' ? 'admin' :
                                <button onClick={() => handleMakeAdmin(user)} className="btn-ghost bg-orange-300  text-xl rounded-lg"><FaUserAltSlash></FaUserAltSlash></button>
                            }</td>
                            <td> {user.role === 'admin' ? 'instructor' :
                                <button onClick={() => handleMakeinstructor()} className="btn-ghost bg-orange-300  text-xl rounded-lg"><FaUserAltSlash></FaUserAltSlash></button>
                            }</td>
                            {/* <td>
                                <button className=' btn-ghost bg-orange-300 text-xl rounded-lg'><FaInfo></FaInfo></button>
                            </td> */}
                            <td>
                                <button className=' btn-ghost bg-orange-300 text-xl rounded-lg'><FaUserGraduate></FaUserGraduate></button>
                            </td>
                            <td><button onClick={() => handleDelete(user)}className="btn btn-ghost bg-gray-200 text-black"><FaTrashAlt></FaTrashAlt></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;