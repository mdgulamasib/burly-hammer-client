import React from 'react';

const Footer = () => {
    return (
        <footer className='footer-center'>
            <div class="footer p-10 bg-base-200 text-base-content mx-auto">
                <div>
                    <span class="footer-title text-lg text-base-800">Subscribe to  Newsletter</span>
                    <div class="form-control w-80">
                        <label class="label">
                            <span class="label-text">Enter your email address</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="footer-title text-lg text-base-800">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Career</a>
                </div>
                <div>
                    <span class="footer-title text-lg text-base-800">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span class="footer-title text-lg text-base-800">Social Media</span>
                    <a class="link link-hover">Facebook</a>
                    <a class="link link-hover">Instagram</a>
                    <a class="link link-hover">LinkedIn</a>


                </div>
            </div>
            <div class="footer footer-center p-4 bg-base-300 text-base-content">
                <p>Copyright © 2022 - All right reserved by burly Corporation</p>
            </div>
        </footer>
    );
};

export default Footer;