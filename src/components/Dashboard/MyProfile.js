import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);

    console.log(user)

    return (
        <div className='my-10 mx-auto'>
            <div className='flex justify-center'>
                <img src={user.photoURL} alt="" />
                <div>
                    <h3>Name: {user.displayName}</h3>
                    <p>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;