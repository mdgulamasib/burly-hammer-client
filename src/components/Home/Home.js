import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
        </>
    );
};

export default Home;