import React, { useEffect, useState } from 'react';
import AllProCard from './AllProCard';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div id="services" className="my-24 md:mx-12">
            <h2 className="text-3xl font-bold text-center text-primary uppercase"><span className='text-black'>All</span> Products
            </h2>
            <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 md:grid-cols-3 my-12 md:mx-8 gap-4">
                {products.map((product) => (
                    <AllProCard
                        product={product}
                        key={product._id}
                    ></AllProCard>
                ))}
            </div>
        </div>
    );
}
export default AllProducts;