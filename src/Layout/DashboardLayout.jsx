import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { FaBars, FaEnvelope, FaEnvelopeOpenText, FaFileExcel, FaHome, FaRegAddressBook, FaShoppingBag, FaSignOutAlt, FaWallet } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const DashboardLayout = () => {
    const { user, userData, logOut } = useContext(AuthContext);
    const currentUser = userData.find(k => user?.email === k.email);
    const location = useLocation();
    const handleSignOut = () => {
        logOut()
            .then((result) => { })
            .catch((error) => console.log(error));
    };

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
                        <NavLink to='/enroll/Salsa'> <FaBars></FaBars> All Classes </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'> <FaSignOutAlt></FaSignOutAlt> <button onClick={handleSignOut} className='w-fit'>Logout</button> </NavLink>
                    </li>
                    <span className="divider"></span>
                    {
                        currentUser.role == 'admin' ?
                            <>
                                <li><NavLink to='/'>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addedclasses'><FaFileExcel></FaFileExcel>Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaEnvelopeOpenText></FaEnvelopeOpenText>Manage Users</NavLink></li>
                            </> :
                            currentUser.role == 'instructor' ?
                                <>
                                    <li><NavLink to='/dashboard/addclass'><FaRegAddressBook></FaRegAddressBook> Add a class</NavLink></li>
                                    <li><NavLink to='/dashboard/pendingclasses'><FaWallet></FaWallet>My Added Classes</NavLink></li>
                                </> :
                                    <>
                                        <li><NavLink to='/dashboard/selectedclasses'>Selected Classes</NavLink></li>
                                        <li><NavLink to='/enroll/ballet'><FaFileExcel></FaFileExcel> My Enrolled classess</NavLink></li>
                                        <li><NavLink to='/dashboard/addclass'><FaWallet></FaWallet>Payment History</NavLink></li>
                                        <li><NavLink to='/enroll/ballet'><FaEnvelopeOpenText></FaEnvelopeOpenText>Feedback</NavLink></li>
                                    </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;