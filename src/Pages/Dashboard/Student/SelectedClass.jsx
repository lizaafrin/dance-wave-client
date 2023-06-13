import React from 'react';
import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import { Link } from 'react-router-dom';

const SelectedClass = () => {

    const [selectedClass, refetch] = useSelectedClass();
    // console.log(selectedClass);
    const unpaidClasses = selectedClass.filter(a => a.status === 'unpaid')

    const handleDelete = item => {
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
                fetch(`http://localhost:5000/selectedclass/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };
    return (
        <>

            <div className=" w-full">
                <Helmet>
                    <title>Dancewave | Selected Class</title>
                </Helmet>
                <div className="font-semibold h-[60px] items-center mb-10 text-center text-amber-900">
                    <h3 className='text-center font-bold text-2xl underline text-orange-500'>All Selected Class : {unpaidClasses.length}</h3>
                    {/* <h3 className="text-xl">Total Course Fee: ${totalFee}</h3> */}
                    {/* <Link to='/dashboard/payment'>
                        <button className="btn btn-warning btn-sm">Pay</button>
                    </Link> */}
                </div>
                <table className="table w-full  bg-orange-100">
                    {/* head */}
                    <thead className='bg-orange-300 '>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Instructor name</th>
                            <th>Course Fee</th>
                            <th>Delete</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            unpaidClasses.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructorName}</td>
                                <td>$ {item.fee}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-gray-200 text-black"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>
                                    <Link state={item} to='/dashboard/payment'> <button className=' btn-ghost bg-orange-300 text-3xl rounded-lg'><FaAmazonPay></FaAmazonPay></button></Link>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};

export default SelectedClass;