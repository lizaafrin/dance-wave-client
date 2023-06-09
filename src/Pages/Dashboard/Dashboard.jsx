import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button mt-20 lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 h-full bg-purple-500 text-base-content form-control">

                    <section className="flex cursor-pointer pt-20 gap-4">
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        <Link>
                            <span className="label-text">Selected Classes</span>
                        </Link>
                    </section>

                    <section className="flex file:cursor-pointer mt-6 gap-4">
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        <Link>
                            <span className="label-text">Enrolled Class</span>
                        </Link>
                    </section>
                    <section className="flex file:cursor-pointer mt-6 gap-4">
                        <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        <Link>
                            <span className="label-text">Payment</span>
                        </Link>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;