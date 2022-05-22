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
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Slide Number 1</span><br /><span>This is the slied text don't ignore bro.</span><br /><span>this si not enought bro</span></p>
                </div>
                <div>
                    <img src={img2} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Slide Number 1</span><br /><span>This is the slied text don't ignore bro.</span><br /><span>this si not enought bro</span></p>
                </div>
                <div>
                    <img src={img3} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Slide Number 1</span><br /><span>This is the slied text don't ignore bro.</span><br /><span>this si not enought bro</span></p>
                </div>
                <div>
                    <img src={img4} alt='img1' />
                    <p className="legend" style={{ 'backgroundColor': '#848484' }}><span className='text-xl'>Slide Number 1</span><br /><span>This is the slied text don't ignore bro.</span><br /><span>this si not enought bro</span></p>
                </div>
            </Carousel >
        </div >
    );
};

export default Banner;