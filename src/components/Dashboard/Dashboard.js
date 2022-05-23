import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import MyProfile from './MyProfile';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    return (
        <div className="drawer drawer-mobile my-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl uppercase font-bold text-center'>{user.displayName}'s <span className='text-primary'>Dashboard</span></h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side bg-base-">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-300 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard" className='uppercase'>My Profile</Link></li>
                    <li><Link to="/dashboard/myorders" className='uppercase'>My Orders</Link></li>
                    <li><Link to="/dashboard/addreview" className='uppercase'>Add Review</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;