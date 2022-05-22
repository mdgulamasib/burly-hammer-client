import React from 'react';

const AllProCard = ({ product }) => {
    const { name, description, image, availableQ, minimumQ, price } = product;
    return (
        <div class="card w-96 bg-base-200 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="Shoes" class="rounded-md" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <small>Available: {availableQ}</small>
                <small>Minimum Order: {minimumQ}</small>
                <p>Unit Price: <span className='text-primary font-bold'>{price}$</span></p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
export default AllProCard;