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
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                setIsReload(!reload)
            })

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
                                <label for="my-modal" class="btn btn-primary">Delete</label>
                            </div>
                        </div>

                        <input type="checkbox" id="my-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Are you sure about deleting this product?</h3>
                                <p class="py-4">Deletion is permanent, you can't go reverse once the item is deleted. Select confirm to delete, or cancel the operation!!!</p>
                                <div class="modal-action">
                                    <label for="my-modal" class="btn" onClick={() => handleItemDelete(product._id)}>Confirm</label>
                                    <label for="my-modal" class="btn">Cancel</label>
                                </div>
                            </div>
                        </div>

                    </div>

                ))}
            </div>




        </div>
    );
}

export default ManageAllProducts;