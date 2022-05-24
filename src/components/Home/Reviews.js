import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Pagination } from "swiper";
import ReviewCard from "./ReviewCard";


SwiperCore.use([Pagination]);

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);



    return (
        <div className="pt-8 pb-24 sm:mx-16 mx-12 lg:mx-24 ">
            <h2 className="text-center pb-8 text-4xl font-bold uppercase">
                Customer <span className="text-primary">Reviews</span>
            </h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id} className="shadow-md  my-2 py-4">
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default Reviews;