import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../images/banner/img1.png'
import img2 from '../../images/banner/img2.png'
import img3 from '../../images/banner/img3.png'
import img4 from '../../images/banner/img4.png'

const Banner = () => {


    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showStatus={false} showThumbs={false}>
                <div>
                    <img src={img1} alt='img1' />
                    <p className="legend" style={{ 'background-color': '#848484' }}><h6 className='text-xl'>Slide Number 1</h6><p>This is the slied text don't ignore bro.</p><p>this si not enought bro</p></p>
                </div>
                <div>
                    <img src={img2} alt='img1' />
                    <p className="legend" style={{ 'background-color': '#848484' }}><h6 className='text-xl'>Slide Number 1</h6><p>This is the slied text don't ignore bro.</p><p>this si not enought bro</p></p>
                </div>
                <div>
                    <img src={img3} alt='img1' />
                    <p className="legend" style={{ 'background-color': '#848484' }}><h6 className='text-xl'>Slide Number 1</h6><p>This is the slied text don't ignore bro.</p><p>this si not enought bro</p></p>
                </div>
                <div>
                    <img src={img4} alt='img1' />
                    <p className="legend" style={{ 'background-color': '#848484' }}><h6 className='text-xl'>Slide Number 1</h6><p>This is the slied text don't ignore bro.</p><p>this si not enought bro</p></p>
                </div>
            </Carousel >
        </div >
    );
};

export default Banner;