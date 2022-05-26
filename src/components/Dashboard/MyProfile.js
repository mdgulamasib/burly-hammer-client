import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {

    const [user] = useAuthState(auth);
    const [reload, setIsReload] = useState(true)
    const [myinfo, setMyinfo] = useState([]);

    const phoneRef = useRef('')
    const imageRef = useRef('')
    const addressRef = useRef('')

    useEffect(() => {

        async function fetchMyAPI() {
            const email = user?.email;
            const url = `https://young-everglades-39818.herokuapp.com/myinfo?email=${email}`;
            try {
                await fetch(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setMyinfo(data))
            }
            catch (error) {
                console.log(error.message);
            }
        }
        fetchMyAPI()
    }, [reload])



    const handleUpdateNumber = async (event) => {
        event.preventDefault();

        const id = myinfo[0]?._id

        const number = phoneRef.current.value

        console.log(id, number)
        // sending data for adding quantity
        const updateItem = { number };

        // sending data for adding quantity
        const url = `https://young-everglades-39818.herokuapp.com/number/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setIsReload(!reload)
            })
    }



    const handleUpdateImage = async (event) => {
        event.preventDefault();
        const id = myinfo[0]?._id
        const imgurl = imageRef.current.value
        const image = { imgurl };

        // sending data for changing image
        const url = `https://young-everglades-39818.herokuapp.com/img/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(image)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setIsReload(!reload)
            })
    }



    const handleUpdateAddress = async (event) => {
        event.preventDefault();
        const id = myinfo[0]?._id

        const location = addressRef.current.value
        const address = { location };

        console.log(id, address)

        // sending data for changing image
        const url = `https://young-everglades-39818.herokuapp.com/address/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(address)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                setIsReload(!reload)
            })
    }



    return (


        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <img src={myinfo[0]?.image} width='200' alt='profile picture' class="max-w-sm rounded-lg shadow-2xl" />
                    <span> <label for="my-modal-img" class="btn btn-xs">Edit</label></span>
                </div>
                <div>
                    <h1 class="text-5xl font-bold">User Details</h1>
                    <p class="py-2">Name: {user.displayName}   </p>
                    <p class="py-2">Email: {myinfo[0]?.email}  </p>



                    <p class="py-2">Phone: {myinfo[0]?.phone} <label for="my-modal-phone" class="btn btn-xs">Edit</label></p>
                    <p class="py-2">Address: {myinfo[0]?.address} <label for="my-modal-address" class="btn btn-xs">Edit</label></p>




                </div>
            </div>






            <input type="checkbox" id="my-modal-img" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Please Submit HOSTED image URL only!!!</h3>
                    <form onSubmit={handleUpdateImage}><input className="shadow appearance-none border rounded w-3/5 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="img" type="text" ref={imageRef} required />
                        <button type="submit">
                            <label for="my-modal-img" class="btn btn-xs btn-blue-400 mx-2">Submit</label>
                        </button><label for="my-modal-img" class="btn btn-xs btn-blue-400 mx-2">Cancel</label>
                    </form>

                </div>
            </div>


            <input type="checkbox" id="my-modal-phone" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Please enter your phone number and submit</h3>
                    <form onSubmit={handleUpdateNumber}><input className="shadow appearance-none border rounded w-3/5 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" ref={phoneRef} required />
                        <button type="submit">
                            <label for="my-modal-phone" class="btn btn-xs btn-blue-400 mx-2">Submit</label>
                        </button><label for="my-modal-phone" class="btn btn-xs btn-blue-400 mx-2">Cancel</label>
                    </form>

                </div>
            </div>


            <input type="checkbox" id="my-modal-address" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Write your full address and submit</h3>
                    <form onSubmit={handleUpdateAddress}><input className="shadow appearance-none border rounded w-3/5 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" ref={addressRef} required />
                        <button type="submit">
                            <label for="my-modal-address" class="btn btn-xs btn-blue-400 mx-2">Submit</label>
                        </button><label for="my-modal-address" class="btn btn-xs btn-blue-400 mx-2">Cancel</label>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default MyProfile;