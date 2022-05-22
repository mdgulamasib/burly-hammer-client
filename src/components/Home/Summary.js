import React from 'react';
import { useCountUp } from 'react-countup';
import bgimg from '../../images/bgimg.gif'
const Summary = () => {

    const countUpRef = React.useRef(null);
    const { } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 89,
        delay: 0,
        duration: 1,
    });
    const countUpRef2 = React.useRef(null);
    const { } = useCountUp({
        ref: countUpRef2,
        start: 0,
        end: 17,
        delay: 0,
        duration: 1,
    });
    const countUpRef3 = React.useRef(null);
    const { } = useCountUp({
        ref: countUpRef3,
        start: 0,
        end: 3000000,
        delay: 0,
        duration: 5,
    });
    const countUpRef4 = React.useRef(null);
    const { } = useCountUp({
        ref: countUpRef4,
        start: 0,
        end: 3771,
        delay: 0,
        duration: 2,
    });

    return (
        <div style={{ "backgroundImage": `url(${bgimg})` }}>


            <div className='text-white md:flex gap-8 items-center'>
                <div className='grid grid-cols-1 p-10 md:w-3/5'>
                    <h5 className='text-3xl font-bold text-primary'>Burly Corporation</h5>
                    <small className='font-bold'>Trusted heavy tools manufacturer</small>
                    <p className=' text-justify'>We are now one of the largest heavy tools manufacturer in the world supplying tools in more than 89 countries. We won 17 national and international Awards, and making 30M+ revenues every year. The thing made us proud is 3771+ global happy client in recent year.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4 px-10'>
                    <div className='md:p-4 md:m-4 text-center'>
                        <p className='text-3xl  font-bold text-primary text-center'>
                            <span ref={countUpRef}></span>
                        </p>
                        <p className='text-xl  font-bold text-primary text-center uppercase'>Countries</p>
                        <p>Business in 89 countries</p>
                    </div>
                    <div className='md:p-4 md:m-4 text-center'>
                        <p className='text-3xl  font-bold text-primary text-center'>
                            <span ref={countUpRef2}></span>
                        </p>
                        <p className='text-xl  font-bold text-primary text-center uppercase'>Awards</p>
                        <p>17 National and International Awards</p>
                    </div>
                    <div className='md:p-4 md:m-4 text-center'>
                        <p className='text-3xl  font-bold text-primary text-center'>
                            <span ref={countUpRef3}></span>
                        </p>
                        <p className='text-xl  font-bold text-primary text-center uppercase'>Revenue</p>
                        <p>30M+ Yearly Revenue</p>
                    </div>
                    <div className='md:p-4 md:m-4 text-center'>
                        <p className='text-3xl  font-bold text-primary text-center'>
                            <span ref={countUpRef4}></span>
                        </p>
                        <p className='text-xl  font-bold text-primary text-center uppercase'>Happy Clients</p>
                        <p>3771+ Global happy client</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Summary;