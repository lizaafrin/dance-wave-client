import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaAward, FaIdBadge } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';


const AllUsers = () => {
    // const [disabled, setDisabled] = useState(false);

    // const[axiosSecure] = useAxiosSecure();
    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await axiosSecure.get('/users')
    //     return res.data;
    // })

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const response = await fetch('https://dancewave-server-side.vercel.app/users',)
        return response.json();

    })
    // console.log(users);
    const handleMakeAdmin = (user) => {
        fetch(`https://dancewave-server-side.vercel.app/users/admin/${user._id}`, {
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
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

    const handleMakeinstructor = (user) => {
        fetch(`https://dancewave-server-side.vercel.app/users/instructor/${user._id}`, {
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
            <table className="table w-full  bg-orange-100">
                {/* head */}
                <thead className='bg-orange-300 '>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>User Email</th>
                        <th>Role</th>
                        <th>Make Instructor</th>
                        <th>Make Admin</th>
                        <th className='ps-10'>Action</th>
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
                            <td>{user.role === 'admin' ? <button className="text-sm bg-orange-200 py-2 px-4 rounded-lg" disabled>Feedback</button> : <button onClick={() => window.my_modal_5.showModal()} className="text-sm bg-orange-400 py-2 px-4 rounded-lg">Feedback</button>
                            }</td>
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

export default AllUsers;