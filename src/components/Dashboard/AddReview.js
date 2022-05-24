import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const imageStorageKey = '4afefea9112bd0a4e1d8c59a1753dbfb';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const review = {
                        name: data.name,
                        email: user.email,
                        job: data.job,
                        ratings: parseInt(data.specialty),
                        text: data.text,
                        img: img
                    }

                    //sending to database

                    fetch('http://localhost:5000/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('review added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the review');
                            }
                        })

                }

            })
    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-8 uppercase">Add a <span className='text-primary'>Review</span></h2>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold mb-2" for="username">
                            Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold" for="job">
                            Job Position
                        </label>
                        <input
                            type="text"
                            placeholder="CEO at XYZ"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("job", {
                                required: {
                                    value: true,
                                    message: 'Job Position is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.job?.type === 'required' && <span className="label-text-alt text-red-500">{errors.job.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold" for="comment">
                            Leave a Comment
                        </label>
                        <textarea
                            type="text"
                            placeholder="Write your experience with us"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("text", {
                                required: {
                                    value: true,
                                    message: 'Text is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.text?.type === 'required' && <span className="label-text-alt text-red-500">{errors.text.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold" for="rating">
                            Ratings (1 -5)
                        </label>
                        <select {...register('specialty')} className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" >
                            <option disabled defaultValue>Pick Your Ratings</option>
                            <option value='1'>⭐(Worst)</option>
                            <option value='2'>⭐⭐(Bad)</option>
                            <option value='3'>⭐⭐⭐(Neutral)</option>
                            <option value='4'>⭐⭐⭐⭐(Good)</option>
                            <option value='5' selected>⭐⭐⭐⭐⭐(Awesome)</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold " for="job">
                            Choose Your Photo
                        </label>
                        <input
                            type="file"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='bg-primary uppercase cursor-pointer hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value="ADD REVIEW" />
                </form>
            </div>
        </div>
    );
};

export default AddReview;