import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {
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
                        description: data.text,
                        image: img,
                        availableQ: data.qnumber,
                        minimumQ: data.minimumq,
                        price: data.price,
                        email: user.email



                    }

                    //sending to database

                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(review)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the product');
                            }
                        })

                }

            })
    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-center my-8 uppercase">Add a <span className='text-primary'>Product</span></h2>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold mb-2" for="username">
                            Product Name
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
                        <label className="block text-sm font-bold" for="comment">
                            Description
                        </label>
                        <textarea
                            type="text"
                            placeholder="Write product Description"
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
                        <label className="block text-sm font-bold mb-2" for="qnumber">
                            Available Quantity
                        </label>
                        <input
                            min="0"
                            type="number"
                            placeholder="1234567890"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("qnumber", {
                                required: {
                                    value: true,
                                    message: 'Quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.qnumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.qnumber.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold mb-2" for="minimumq">
                            Minimum Order
                        </label>
                        <input
                            min="0"
                            type="number"
                            placeholder="1234567890"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("minimumq", {
                                required: {
                                    value: true,
                                    message: 'minimum quantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.minimumq?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumq.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="block text-sm font-bold mb-2" for="username">
                            Unit Price
                        </label>
                        <input
                            min="0"
                            type="number"
                            placeholder="1234567890"
                            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
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

                    <input className='bg-primary uppercase cursor-pointer hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit" value="ADD PRODUCT" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;