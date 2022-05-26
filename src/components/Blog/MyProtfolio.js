import React from 'react';
import myphoto from '../../images/my-photo.png'

const MyProtfolio = () => {
    return (
        <div>
            <div class="card mx-auto my-10 w-1/4 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={myphoto} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="font-bold text-3xl uppercase">MD GULAM ASIB</h2>
                    <h2 class=" uppercase">Mern stack developer</h2>
                    <h2 class="text-sm">Whatsapp: +8801770609470</h2>
                    <h2 class="text-sm">Email: mdgulamasib@gmail.com</h2>
                    <p></p>
                </div>
            </div>
            <div class="card mx-auto my-10 w-3/4 bg-base-100 shadow-xl">
                <div className='md:flex justify-center'>
                    <div class="card-body">
                        <h2 class="font-bold text-2xl uppercase">Education</h2>
                        <h2 class=" ">BSc in Computer Science</h2>
                        <h2 class="text-sm">University OF The People</h2>
                        <h2 class="font-bold text-2xl uppercase">Live Project</h2>
                        <a href="https://burly-manufacturer.web.app/" className='text-sm' target='_blank'>https://burly-manufacturer.web.app/</a>
                        <a href="https://master-computer-cff25.web.app/" className='text-sm' target='_blank'>https://master-computer-cff25.web.app/</a>
                        <a href="https://dental-care-5139c.web.app/" className='text-sm' target='_blank'>https://dental-care-5139c.web.app/</a>
                    </div>
                    <div class="card-body ">
                        <h2 class="font-bold text-2xl uppercase">Technical Skills</h2>
                        <h2 class=" "><span className='font-bold'>Frontend:</span> React JS, HTML5, CSS3</h2>
                        <h2 class=" "><span className='font-bold'>Backend:</span> Backend: Node JS, Express JS</h2>
                        <h2 class=" "><span className='font-bold'>Database:</span> MongoDB</h2>
                        <h2 class=" "><span className='font-bold'>Tools:</span>   VS Code, GitHub, Figma, Chrome Dev tools,<br /> Heroku, Netlify, Firebase, JWT</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProtfolio;