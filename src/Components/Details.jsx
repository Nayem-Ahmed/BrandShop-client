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


        <div className="flex flex-col lg:flex-row md:flex-row shadow-md gap-8 items-center bg-base-100  my-6 p-5 rounded-none mt-8">
          <div className="basis-1/2">
            <img className=" " src={photo} alt="Album" />
            </div>

            <div className="basis-1/2 ">
                <h2 className="font-bold text-2xl mb-5">{brand}</h2>
                <p className="text-gray-500 mb-6">{description}</p>
         
                    <button onClick={handleaddcart} className="btn">
                        <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
                       
                        Add Cart
                    </button>
                </div>
            </div>
   
    );
};

export default Details;