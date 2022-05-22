
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init'
import Loading from '../Shared/Loading';
import GoogleSignIn from './GoogleSignIn';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }
    console.log(error)

    if (error) {
        errorElement = <p className='text-red-700 text-sm'>{error?.message}</p>
    }




    const handleSignIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)

    }



    const navigateRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast.success("Email Sent, Please Check Inbox Or Spam Folder", {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });

        }


        else {
            toast.error("Enter Your Email & Click The Reset Link", {
                position: toast.POSITION.TOP_CENTER,
                theme: 'colored'
            });
        }
    }

    console.log(user)

    return (
        <div className='mx-auto'>
            <h1 className='text-2xl font-bold my-10 text-center uppercase'>Please <span className='text-primary'>Login</span></h1>
            <div class="md:w-1/4  mx-auto">
                <form onSubmit={handleSignIn} class="bg-primary-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" ref={emailRef} placeholder="abc@def.co" required />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="*************" ref={passwordRef} required />
                        {errorElement}
                    </div>
                    <div class="flex items-center">
                        <button class="bg-primary uppercase hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                            Sign In
                        </button>
                        <small class="inline-block align-baseline  text-sm text-blue-500 hover:text-blue-800 uppercase cursor-pointer pl-10" onClick={resetPassword}>Forgot Password ?</small>
                    </div>
                    <p>Don't have an account? <span className='inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 uppercase cursor-pointer' onClick={navigateRegister}>Click to Register</span></p>
                </form>
                <div class="divider font-bold">OR</div>
                <GoogleSignIn></GoogleSignIn>
            </div>
        </div>
    );
};

export default Login;