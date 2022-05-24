import React, { useEffect, useState } from 'react';


const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [reload, setIsReload] = useState(true)

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [reload]);

    const handleItemDelete = id => {
        const proceed = window.confirm('Deleting Items is Permanent! Think twice before pressing OK...');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setIsReload(!reload)
                })
        }
    }


    return (
        <div id="services" className="my-24 md:mx-12">
            <h2 className="text-3xl font-bold text-center text-primary uppercase"><span className='text-black'>All</span> Products
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 my-12 md:mx-8 gap-4">
                {products.map((product) => (
                    <div className="card md:max-w-full bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product.image} alt="Shoes" className="rounded-md" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.name}</h2>
                            <p>{product.description}</p>
                            <small>Available: {product.availableQ}</small>
                            <small>Minimum Order: {product.minimumQ}</small>
                            <p>Unit Price: <span className='text-primary font-bold'>${product.price}</span></p>
                            <div className="card-actions">
                                <button onClick={() => handleItemDelete(product._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageAllProducts;