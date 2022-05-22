import React from 'react';
import { useCountUp } from 'react-countup';
import bgimg from '../../images/bgimg.gif'
import rev from '../../images/summary/rev.png'
import award from '../../images/summary/award.png'
import global from '../../images/summary/world.png'
import happy from '../../images/summary/happy.png'
const Summary = () => {

    const countUpRef = React.useRef(null);
    const { dummy1 } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: 89,
        delay: 0,
        duration: 3,
    });
    const countUpRef2 = React.useRef(null);
    const { dummy2 } = useCountUp({
        ref: countUpRef2,
        start: 0,
        end: 17,
        delay: 0,
        duration: 2,
    });
    const countUpRef3 = React.useRef(null);
    const { dummy3 } = useCountUp({
        ref: countUpRef3,
        start: 0,
        end: 30,
        delay: 0,
        duration: 2,
    });
    const countUpRef4 = React.useRef(null);
    const { dummy4 } = useCountUp({
        ref: countUpRef4,
        start: 0,
        end: 3771,
        delay: 0,
        duration: 4,
    });

    return (
        <div style={{ "backgroundImage": `url(${bgimg})` }}>


            <div className='text-white md:flex gap-8 items-center'>
                <div className='grid grid-cols-1 p-10 md:w-9/12'>
                    <h5 className='text-3xl font-bold text-primary'>Burly Corporation</h5>
                    <small className='font-bold'>Trusted heavy tools manufacturer</small>
                    <p className=' text-justify'>We are now one of the largest heavy tools manufacturer in the world supplying tools in more than 89 countries. We won 17 national and international Awards, and making 30M+ revenues every year. The thing made us proud is 3771+ global happy client in recent year.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4 px-10 md:w-3/4'>
                    <div className='md:p-4 md:m-4 text-center'>
                        <img className='mx-auto' src={global} alt="rev" />
                        <p className='text-2xl text-primary text-center'>

                            <span ref={countUpRef}></span><span> +</span>
                        </p>
                        <p className='text-md text-primary text-center uppercase'>Countries</p>
                    </div>
                    <div className='md:p-4 md:m-4 text-center'>
                        <img className='mx-auto' src={award} alt="rev" />
                        <p className='text-2xl text-primary text-center'>
                            <span ref={countUpRef2}></span>
                        </p>
                        <p className='text-md text-primary text-center uppercase'>Awards</p>
                    </div>

                    <div className='md:p-4 md:m-4 text-center'>
                        <img className='mx-auto' src={rev} alt="rev" />
                        <p className='text-2xl text-primary text-center'>
                            <span ref={countUpRef3}></span><span>M +</span>
                        </p>
                        <p className='text-md text-primary text-center uppercase'>Yearly Revenue</p>
                    </div>

                    <div className='md:p-4 md:m-4 text-center'>
                        <img className='mx-auto' src={happy} alt="rev" />
                        <p className='text-2xl  text-primary text-center'>
                            <span ref={countUpRef4}></span><span> +</span>
                        </p>
                        <p className='text-md text-primary text-center uppercase'>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Summary;