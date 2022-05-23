import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const { _id, name, description, image, availableQ, minimumQ, price } = product;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/products/${id}`)
    }

    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-md" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <small>Available: {availableQ}</small>
                <small>Minimum Order: {minimumQ}</small>
                <p>Unit Price: <span className='text-primary font-bold'>${price}</span></p>
                <div className="card-actions">
                    <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;