import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const HomeAccordion = () => {
    return (
        <div className='w-2/4 mx-auto my-10'>
            <h3 className='text-2xl font-bold text-center my-8'>Question <span className='text-primary'> & Answer</span></h3>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Where can I buy an Burly Hammer?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Book order or Call or e-mail us directly by using the Contact Us page on our website.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Are Burly Hammers made in the USA?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes, the BURLY Hammers are completely manufactured and assembled in the USA.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the minimum order?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Minimum order is mention in the product card. Check there...
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What different metals are available for Burly Hammers?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Our most popular alloys are brass or bronze but we can also manufacture Babbitt, Copper, and Zinc.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How can I become a distributor of Burly Hammers, Inc.?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Just click on the "Distributor" button on the top right hand corner of our Home page and follow the easy instructions.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Why should I use an BURLY Hammer instead of some other hammer manufacturer?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            BURLY Hammers, Inc. has been manufacturing non-marring, non-sparking hammers since 1956. Our extensive knowledge of alloys and manufacturing together with decades of experience has produced the highest quality hammers in the world. Our dedicated staff and modern manufacturing facility ensure your order is delivered on time, every time.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default HomeAccordion;