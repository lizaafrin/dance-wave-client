import React, { useContext, useEffect, useState } from 'react';
import Header from '../Pages/Shared/Header';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import SelectedClass from '../Pages/Dashboard/SelectedClass';
import { FaBars, FaEnvelope, FaEnvelopeOpenText, FaFileExcel, FaHome, FaShoppingBag, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const DashboardLayout = () => {
    const { user, userData } = useContext(AuthContext);
    console.log(user, userData);
    const currentUser = userData.find(k => user?.email === k.email);
    
    
    // const isAdmin = false;
    // const isAdmin = true;
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col justify-center w-full">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn  btn-outline btn-sm border-t-4 border-b-4 bg-orange-100 drawer-button mt-20 mb-10 lg:hidden w-fit mx-auto">Open drawer</label>
                {/* <SelectedClass></SelectedClass> */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full bg-lime-100 text-base-content">
                    {/* Sidebar content here */}

                    <img className='w-24 rounded-full h-24 object-cover' src={currentUser.photoURL} alt="" />
                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/classes'> <FaBars></FaBars> All Classes </NavLink>
                    </li>
                    <span className="divider"></span>
                    {
                        currentUser.role == 'admin' ?
                            <>
                                <li><NavLink to='/dashboard'>Admin Home</NavLink></li>
                                <li><NavLink to='/enroll/ballet'><FaFileExcel></FaFileExcel> Add Class</NavLink></li>
                                <li><NavLink to='/enroll/ballet'><FaWallet></FaWallet>Manage Users</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaEnvelopeOpenText></FaEnvelopeOpenText>All Students</NavLink></li>
                            </> :
                            currentUser.role == 'instructor' ?
                                <>
                                    <li><NavLink to='/dashboard/selectedclasses'>Add a class</NavLink></li>
                                    <li><NavLink to='/enroll/ballet'><FaFileExcel></FaFileExcel> My Approved Classes</NavLink></li>
                                    <li><NavLink to='/enroll/ballet'><FaWallet></FaWallet>My Pending Classes</NavLink></li>
                                </> :
                                    <>
                                        <li><NavLink to='/dashboard/selectedclasses'>Selected Classes</NavLink></li>
                                        <li><NavLink to='/enroll/ballet'><FaFileExcel></FaFileExcel> My Enrolled classess</NavLink></li>
                                        <li><NavLink to='/enroll/ballet'><FaWallet></FaWallet>Payment History</NavLink></li>
                                        <li><NavLink to='/enroll/ballet'><FaEnvelopeOpenText></FaEnvelopeOpenText>Feedback</NavLink></li>
                                    </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;