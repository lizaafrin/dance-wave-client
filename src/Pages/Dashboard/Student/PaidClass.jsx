import React from 'react';
import { FaAmazonPay, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import useSelectedClass from '../../../Hooks/useSelectedClass';
import { Link } from 'react-router-dom';

const PaidClass = () => {
    const [selectedClass, refetch] = useSelectedClass();
    // console.log(selectedClass);
    const paidClasses = selectedClass.filter(a => a.status === 'paid')


    return (
        <>

            <div className=" w-full">
                <Helmet>
                    <title>Dancewave | Selected Class</title>
                </Helmet>
                <div className="font-semibold h-[60px] items-center mb-10 text-center text-amber-900">
                    <h3 className='text-center font-bold text-2xl underline text-orange-500'>All Selected Class : {paidClasses.length}</h3>
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
                            <th>Class Name</th>
                            <th>Instructor name</th>
                            <th>Course Fee</th>
                            <th>Status</th>
                            <th>Transaction Id</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paidClasses.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructorName}</td>
                                <td>$ {item.fee}</td>
                                <td className='capitalize'> {item.status}</td> 
                                <td>{item.transactionId}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};


export default PaidClass;