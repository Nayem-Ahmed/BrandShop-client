import { useLoaderData } from "react-router-dom";


const Details = () => {
    const loaderdetails = useLoaderData();
    const { photo, description, brand } = loaderdetails;
    return (


        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
            <figure className="h-56"><img className="" src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{description}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">Add Card</button>
                </div>
            </div>
        </div>
    );
};

export default Details;