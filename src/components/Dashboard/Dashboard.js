import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    return (
        <div class="drawer drawer-mobile my-10">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-center'>{user.displayName}'s <span className='text-primary'>Dashboard</span></h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side bg-base-">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-300 text-base-content">
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