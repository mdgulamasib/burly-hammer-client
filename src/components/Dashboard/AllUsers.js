import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserTable from './UserTable';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-xl font-bold text-center my-8 uppercase">Total Users - <span className='text-primary'>{users.length}</span></h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Current Role</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserTable
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}
                            ></UserTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;