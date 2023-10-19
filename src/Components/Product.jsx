import React from 'react';
import swal from 'sweetalert';


const Product = () => {
    const handleproductadd = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const select = e.target.select.value; 
        const photo = e.target.photo.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const addproduct = {name,brand,select,photo,description,rating}
        console.log(addproduct)
        // send data to the server
        fetch('http://localhost:5000/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(addproduct)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if (data.acknowledged) {
                swal("Added Product!", "You clicked the button!", "success");

                
            }
        })

    }
    return (
        <div>
            <form onSubmit={handleproductadd} className="max-w-md mx-auto p-6 mt-5 bg-white rounded-lg shadow-lg">
                <h2 className='text-center font-semibold mb-5 text-xl'>Add Product</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">
                        Brand Name
                    </label>
                    <input
                        type="text"
                        id="brand"
                        name="brand"
                        placeholder="Brand Name"
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="car" className="block text-gray-700 text-sm font-bold mb-2">
                       Type
                    </label>
                    <select
                        id="car"
                        name="select"
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="Coca-Cola">Coca-Cola</option>
                        <option value="McDonald's">McDonald's</option>
                        <option value="Starbucks">Starbucks</option>
                        <option value="PepsiCo">PepsiCo</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        id="photo"
                        name="photo"
                        placeholder="Photo URL"
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Short Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Short Description"
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
                        Rating
                    </label>
                    <input
                        type="text"
                        id="rating"
                        name="rating"
                        placeholder="Rating"
                        // value={product.rating}
                        // onChange={handleInputChange}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex justify-center">
                    <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Add Product" />
                    
                </div>
            </form>

        </div>
    );
};

export default Product;