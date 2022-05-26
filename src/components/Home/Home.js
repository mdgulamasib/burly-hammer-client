import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import HomeAccordion from './HomeAccordion';
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
            <HomeAccordion></HomeAccordion>
            <ContactForm></ContactForm>
        </>
    );
};

export default Home;