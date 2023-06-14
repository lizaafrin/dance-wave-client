import React from 'react';
import { Helmet } from 'react-helmet-async';
import useSelectedClass from '../../../Hooks/useSelectedClass';


const PaymentHistory = () => {

    const [selectedClass, refetch] = useSelectedClass();
    // console.log(selectedClass);
    const paidClasses = selectedClass.filter(a => a.status === 'paid')
    return (
        <>

            <div className=" w-full">
                <Helmet>
                    <title>Dancewave | Payment History</title>
                </Helmet>
                <div className="font-semibold h-[60px] items-center mb-10 text-center text-amber-900">
                    <h3 className='text-center font-bold text-2xl underline text-orange-500'>Payment History</h3>
                </div>
                <table className="table w-full  bg-orange-100">
                    {/* head */}
                    <thead className='bg-orange-300 '>
                        <tr>
                            <th></th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor name</th>
                            <th>Status</th>
                            <th>Transaction ID</th>


                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            paidClasses.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Class Image" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructorName}</td>
                                <td className='capitalize'> {item.status}</td>
                                
                                <td>{item.transactionId}</td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentHistory;