import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);


    return (
        <div id="services" className="my-24 md:mx-12">
            <h2 className="text-3xl font-bold text-center text-primary uppercase"><span className='text-black'>Top</span> Products
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 my-12 md:mx-8 gap-4">
                {products.slice(-3).reverse().map((product) => (
                    <ProductsCard
                        product={product}
                        key={product._id}
                    ></ProductsCard>
                ))}
            </div>
        </div>
    );
};

export default Products;