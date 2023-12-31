import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { AuthContext } from '../../provider/AuthProvider';
import { InfinitySpin } from 'react-loader-spinner';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);
    const handleSignOut = () => {
        logOut()
            .then((result) => { })
            .catch((error) => console.log(error));
    };
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Categories</Link></li>
        <li><Link to='/enroll/Salsa'>All Classes</Link></li>
        <li><Link to='/allinstructors'>Instructors</Link></li>
        {user && <li><Link to='/dashboard'>Dashboard</Link></li>}

    </>
    // if (loading) {
    //     return (
    //         <div className='flex justify-center'>
    //             <InfinitySpin
    //                 width='200'
    //                 color="#4fa94d"
    //             />
    //         </div>
    //     )
    // }
    
    return (
        <>
            <div className="navbar bg-purple-300 text-black fixed z-10 max-w-screen-xl bg-opacity-60">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-10 h-10' src={logo} alt="" />
                        <a className="btn btn-ghost normal-case text-xl">DanceWave</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <img className='w-12 h-12 rounded-full' src={user?.photoURL} title={user?.displayName} />
                            <button
                                className="hover:bg-fuchsia-700 lg:px-4 py-3 rounded-lg"
                                onClick={handleSignOut}
                            >
                                Sign out
                            </button></> :
                        <Link to='/login' className="btn">Login</Link>

                    }
                </div>
            </div>
        </>
    );
};

export default Header;