import {Link, useLoaderData } from "react-router-dom";
// import Brand from "./Brand";
const ProductbasedBrand = () => {
    const loaderbrand = useLoaderData()
    console.log(loaderbrand)
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/gJBV0Cb/istockphoto-1056953290-1024x1024.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G0mrTgy/istockphoto-1451843409-1024x1024.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/G0mrTgy/istockphoto-1451843409-1024x1024.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            {
                loaderbrand.map(brandd => {
                    const {description}= brandd
                    const truncatedDescription =
                    brandd.description.length > 200 ? description.slice(0, 200) + "..." : brandd.description;
                    return <div key={brandd._id} className="card card-side bg-base-100 shadow-xl mb-8 grid md:grid-cols-2">
                        <figure><img className="h-80" src={brandd.photo} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{brandd.name}</h2>
                            <h2 className="card-title">{brandd.brand}</h2>
                            <p className="font-semibold">{brandd.price}$</p>
                            {/* <p className="text-gray-500">{brandd.description}</p> */}
                            <p className="text-gray-500">{truncatedDescription}</p>
                            <p>{brandd.rating}</p>
                            <div className="card-actions">
                                <Link to={`/details/${brandd._id}`} >
                               <button className="btn btn-accent">Details</button>
                               </Link>
                                <button className="btn btn-info">Update</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ProductbasedBrand;






