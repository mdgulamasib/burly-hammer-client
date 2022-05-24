import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../components/Shared/Loading'


const AddReview = () => {

    const nameRef = useRef('')
    const jobRef = useRef('');
    const ratingsRef = useRef('');
    const textRef = useRef('');
    const imgRef = useRef('');


    const [user] = useAuthState(auth);
    const [imgbb, setImgbb] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [uploadedImg, setUploadedImg] = useState("");
    const imageStorageKey = '4afefea9112bd0a4e1d8c59a1753dbfb';



    const uploadImage = (event) => {
        setImgbb(event.target.files[0])
    }

    const handleAddReview = async (event) => {

        setIsLoading(true)

        event.preventDefault();
        const name = nameRef.current.value;
        const job = jobRef.current.value;
        const ratings = ratingsRef.current.value;
        const message = textRef.current.value;
        const email = user.email;

        const image = imgbb;
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.success) {
                    setUploadedImg(result.data.url);

                    const order = { name, email, job, ratings, message, uploadedImg };

                    // send data to insert orders
                    fetch('http://localhost:5000/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(order)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                alert('Item added successfully!!!');
                                event.target.reset();
                                setIsLoading(false);
                            }

                        })


                }
            })


    }

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='my-10 mx-auto'>
            <form onSubmit={handleAddReview} className="md:w-72" >
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="username">
                        Your Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" ref={nameRef} placeholder='Md Gulam Asib' required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="job">
                        Job Position
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="jobtitle" type="text" placeholder='CEO-at xxx company' ref={jobRef} required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="rating">
                        Ratings (1 -5)
                    </label>
                    <select className="shadow border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" ref={ratingsRef}>
                        <option disabled defaultValue>Pick Your Ratings</option>
                        <option value='1'>⭐(Worst)</option>
                        <option value='2'>⭐⭐(Bad)</option>
                        <option value='3'>⭐⭐⭐(Neutral)</option>
                        <option value='4'>⭐⭐⭐⭐(Good)</option>
                        <option value='5' selected>⭐⭐⭐⭐⭐(Awesome)</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="comment">
                        Leave a Comment
                    </label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="address" type="address" ref={textRef} placeholder="Tell everyone about our business relationship" required />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" for="job">
                        Choose Your Photo
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="img" type="file" ref={imgRef} onChange={uploadImage} required />
                </div>

                <div className="flex items-center">
                    <button className="bg-primary uppercase hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;