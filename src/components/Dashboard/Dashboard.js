import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery, useQueryErrorResetBoundary } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import MyProfile from './MyProfile';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log("admin console", admin)




    return (
        <div className="drawer drawer-mobile my-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl uppercase font-bold text-center'>{user.displayName}'s <span className='text-primary'>Dashboard</span></h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-base-">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard" className='uppercase'>My Profile</Link></li>


                    {admin ? <>
                        <li><Link to="/dashboard/allusers" className='uppercase'>Make Admin</Link></li>
                        <li><Link to="/dashboard/addproduct" className='uppercase'>Add Product</Link></li>
                        <li><Link to="/dashboard/manageallorders" className='uppercase'>Manage Orders</Link></li>
                        <li><Link to="/dashboard/manageallproducts" className='uppercase'>Manage Products</Link></li>
                    </> : <>

                        <li><Link to="/dashboard/myorders" className='uppercase'>My Orders</Link></li>
                        <li><Link to="/dashboard/addreview" className='uppercase'>Add Review</Link></li>

                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;