import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Summary from './Summary';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Summary></Summary>
            <ContactForm></ContactForm>
        </>
    );
};

export default Home;