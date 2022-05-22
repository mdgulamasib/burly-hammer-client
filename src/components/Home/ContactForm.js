import React from 'react';

const ContactForm = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="text-center lg:text-left md:w-3/5">
                    <h1 className="text-5xl font-bold">You are special!</h1>
                    <p className="py-6">It is always a wise decision to leave us a message. We are very happy to assist you with valuable information you need. Feel free to send us a message.</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="email" placeholder="Email" required className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <textarea type="text" className="input h-48 input-bordered" placeholder="Write Your Message" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;