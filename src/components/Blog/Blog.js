import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Blog = () => {
    return (
        <div className='w-2/4 mx-auto my-10'>
            <h3 className='text-2xl font-bold text-center my-8'>Question <span className='text-primary'> & Answer</span></h3>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How will you improve the performance of a React Application?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            React modifies its UI via rendering states and props, however needless states and props slow down a react application's speed. As a result, reducing needless states and props may speed up and improve the performance of a react application.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are the different ways to manage a state in a React application?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Depending on the situation, react states might be controlled locally or globally. Locally managed states can only be used inside a single component, but globally managed states(hooks) can be reused across numerous components.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How does prototypical inheritance work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            In prototypal inheritance, the prototype linkage allows an object to "inherit" properties from another object. Every JS function contains a prototype object by default. Prototypal inheritance is a javascript feature that allows to add methods and attributes to objects. It's a way for one object to inherit the properties and methods of another. Prototypal inheritance, on the other hand, includes not just prototypes descended from other prototypes, but also prototype-derived objects.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Why you do not set the state directly in React?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            React keeps a copy of the object in memory for future cross-matching. If we update anything in the react state directly, two distinct object references are created in memory, which may cause the app to crash. We are not permitted to directly input new data in order to render and re-render states correctly.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            I may use the map() function, which accepts an array, to render values within the object's array. I'll find a key-value pair of objects after running map() on that array. I'll be able to access the data using dot notation once the object is located. This will allow me to locate info based on names.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is a unit test? Why should write unit tests?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Testing the unit of a task before implementing it in the overall project is known as unit testing in programming. We code large projects, and if we think we'll be able to render the entire project once we've finished all of the code, we'll almost certainly find that some of the functions don't work as expected. That's why we need to test small chunks of our work frequently, which is what unit testing is all about.
                            Before a piece of code is released, it must pass unit testing. This contributes to the maintenance of a stable technological environment that prioritizes quality.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blog;