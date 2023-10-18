import React from 'react';

const Product = () => {
    const handleproductadd = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const brand = e.target.brand.value;
        const select = e.target.select.value; 
        const photo = e.target.photo.value;
        const description = e.target.description.value;
        const addproduct = {name,brand,select,photo,description}
        console.log(addproduct)

    }
    return (
        <div>
            <form onSubmit={handleproductadd} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
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
                        category
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
                <div className="flex justify-center">
                    <input  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Add Product" />
                    
                </div>
            </form>

        </div>
    );
};

export default Product;