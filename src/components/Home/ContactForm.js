import React from 'react';

const ContactForm = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">

                <div class="text-center lg:text-left md:w-3/5">
                    <h1 class="text-5xl font-bold">You are special!</h1>
                    <p class="py-6">It is always a wise decison to leave us a message. We are very happy to assist you with valuable information you need. Feel free to send us a message.</p>
                </div>

                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Contact Email</span>
                            </label>
                            <input type="email" placeholder="Email" required class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Write Your Message</span>
                            </label>
                            <textarea type="text" class="input h-48 input-bordered" placeholder="Write Your Message" cols="30" rows="10"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactForm;