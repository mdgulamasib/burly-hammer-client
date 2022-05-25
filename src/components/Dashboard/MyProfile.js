import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {

    const [user] = useAuthState(auth);

    const [myinfo, setMyinfo] = useState([]);

    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `http://localhost:5000/myinfo?email=${email}`;
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setMyinfo(data))
            }
            catch (error) {
                console.log(error.message);
            }
        }
        fetchMyAPI()
    }, [user?.email])

    console.log()
    console.log()
    return (
        <div>
            <h1 className='text-xl uppercase text-center my-8 font-bold'>User <span className='text-primary'>Information</span></h1>
            <div className='my-10 mx-auto'>
                <div className='flex items-center justify-center'>
                    <div class="avatar online">
                        <div class="w-24 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <div className='px-8'>
                        <h3>Name: {user.displayName}</h3>
                        <p>Email: {user.email}</p>
                    </div>
                </div>
            </div>

            <div>
                <p>Location: {myinfo[0]?.email} <span><button class="btn btn-xs">Edit</button></span> </p>

            </div>






        </div>
    );
};

export default MyProfile;