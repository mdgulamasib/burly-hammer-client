import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import GoogleSignIn from '../Authentication/GoogleSignIn';
import Loading from '../Shared/Loading';

const Registration = () => {
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);

    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-red-700 text-sm'>{error?.message}</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        await updateProfile({ displayName: name });
    }

    const navigateLogin = event => {
        navigate('/login')
    }

    console.log(user)

    return (
        <div className='mx-auto'>
            <h1 className='text-2xl font-bold my-10 text-center uppercase'>Please <span className='text-primary'>Register</span></h1>
            <div className="md:w-1/4  mx-auto">
                <form onSubmit={handleRegister} className="bg-primary-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref={nameRef} placeholder="Md Gulam Asib" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" ref={emailRef} placeholder="abc@def.co" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" ref={passwordRef} required />
                        {errorElement}
                    </div>
                    <div className="flex items-center">
                        <button className="bg-primary uppercase hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Register
                        </button>
                    </div>
                    <p>Already have an account? <span className='inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 uppercase cursor-pointer' onClick={navigateLogin}>Click to login</span></p>
                </form>
                <div className="divider font-bold">OR</div>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Registration;