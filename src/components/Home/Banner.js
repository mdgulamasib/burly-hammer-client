import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../images/banner/img1.png'
import img2 from '../../images/banner/img2.png'
import img3 from '../../images/banner/img3.png'
import img4 from '../../images/banner/img4.png'

const Banner = () => {


    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false}>
                <div>
                    <img src={img1} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Dead Blow Hammers</span><br /><span>It is designed to perform better.</span><br /><span>Setting a new face to the soft face.</span></p>
                </div>
                <div>
                    <img src={img2} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Bronze/Copper Hammer</span><br /><span>It is the softest face hammer we offer.</span><br /><span>Unique design for better protection.</span></p>
                </div>
                <div>
                    <img src={img3} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Stryker Steel Hammer</span><br /><span>Our stryker hammer tested 36000 strikes.</span><br /><span>Heavy duty stryker for professional.</span></p>
                </div>
                <div>
                    <img src={img4} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Brass Hammer</span><br /><span>Made of pure steel.</span><br /><span>None marring best non sparking hammer.</span></p>
                </div>
            </Carousel >
        </div >
    );
};

export default Banner;