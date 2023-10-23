import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import swal from "sweetalert";



const Details = () => {

    const handleaddcart = ()=>{
        const neww = {photo, brand, name, price, description}
        fetch('https://fooddb-server.vercel.app/cart',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(neww)
        })
        .then(res =>res.json())
        .then(data => {
          console.log(data)
          if(data.insertedId){
            swal("Add your product!", "You clicked the button!", "success");
          }
        })
    }
    const loaderdetails = useLoaderData();
    const { _id,photo, description,name, brand,price} = loaderdetails;
    return (


        <div className="card lg:card-side bg-base-100 shadow-xl mt-8">
            <figure className="h-48"><img className="" src={photo} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p className="text-gray-500">{description}</p>
                <div className="card-actions ">
                    <button onClick={handleaddcart} className="btn">
                        <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
                       
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;