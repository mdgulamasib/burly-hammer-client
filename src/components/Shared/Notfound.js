import React from 'react';
import imgNotFound from '../../images/PageNotFound.png'

const NotFound = () => {
    return (
        <div className=' grid justify-items-center '>
            <img className='my-8' src={imgNotFound} style={{ width: '300px' }} alt="" />
            <h1 className='text-3xl my-8'>Error: 404 (Page Not-found)</h1>
        </div>
    );
};

export default NotFound;