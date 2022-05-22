import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Products from './Products';
import Summary from './Summary';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <ContactForm></ContactForm>
        </>
    );
};

export default Home;