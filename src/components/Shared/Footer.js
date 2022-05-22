import React from 'react';

const Footer = () => {
    return (
        <footer className='footer-center'>
            <div className="footer p-10 bg-base-200 text-base-content mx-auto">
                <div>
                    <span className="footer-title text-lg text-base-800">Subscribe to  Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="footer-title text-lg text-base-800">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Career</a>
                </div>
                <div>
                    <span className="footer-title text-lg text-base-800">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title text-lg text-base-800">Social Media</span>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">LinkedIn</a>


                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2022 - All right reserved by burly Corporation</p>
            </div>
        </footer>
    );
};

export default Footer;