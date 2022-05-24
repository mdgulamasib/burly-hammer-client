import React from "react";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
    const { name, job, ratings, text, img } = review;
    return (
        <>
            <div>
                <div className="flex pl-6 py-4">
                    {" "}
                    <img className="w-16 h-16 rounded-full" src={img} alt="" />
                    <div className="my-auto mx-2">
                        <p className="font-bold">{name}</p>
                        <p className="text-sm">{job}</p>
                        <ReactStars
                            classNames="star"
                            size={16}
                            value={ratings}
                            edit={false}
                        />
                    </div>
                </div>
                <p className="pl-6 text-sm text-gray-500 pb-2">{text}</p>


            </div>
        </>
    );
};

export default ReviewCard;