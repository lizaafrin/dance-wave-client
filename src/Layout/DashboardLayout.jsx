import React from 'react';
import Header from '../Pages/Shared/Header';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import SelectedClass from '../Pages/Dashboard/SelectedClass';
import { FaBars, FaEnvelope, FaEnvelopeOpenText, FaFileExcel, FaHome, FaShoppingBag, FaWallet } from 'react-icons/fa';

const DashboardLayout = () => {

    // const isAdmin = false;
    const isAdmin = true;
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


                    <li>
                        <NavLink to='/'><FaHome></FaHome>Home </NavLink>
                    </li>
                    <li>
                        <NavLink to='/classes'> <FaBars></FaBars> All Classes </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaShoppingBag></FaShoppingBag> </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/contact'> <FaEnvelope></FaEnvelope> Contact </NavLink>
                    </li>
                    <span className="divider"></span>
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/selectedclasses'>Admin Home</NavLink></li>
                            <li><NavLink to='/enroll/ballet'><FaFileExcel></FaFileExcel> Add Class</NavLink></li>
                            <li><NavLink to='/enroll/ballet'><FaWallet></FaWallet>Manage Classes</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaEnvelopeOpenText></FaEnvelopeOpenText>All Students</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='/dashboard/selectedclasses'>Selected Classes</NavLink></li>
                                <li><NavLink to='/enroll/ballet'><FaFileExcel></FaFileExcel> Enrolled classess</NavLink></li>
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