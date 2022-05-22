import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import google_icon from '../../images/google_icon.png'
import Loading from '../Shared/Loading';
const GoogleSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()}
                className='btn mx-auto w-full my-2'>
                <img src={google_icon} alt="" width="30" />
                <span className='px-2 uppercase'>Sign-in using google</span>
            </button>
        </div>
    );
};

export default GoogleSignIn;