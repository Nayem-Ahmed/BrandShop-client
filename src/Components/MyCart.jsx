import React from 'react';

const MyCart = ({ cart }) => {
    const handledelete = (id)=>{
        fetch(`http://localhost:5000/cart/${id}`,{
            method: "DELETE",
        })
        .then(res =>res.json())
        .then(data => {
          console.log(data)
          if(data.deletedCount>0){
            swal("Delete your product!", "You clicked the button!", "success");
             
          }
        })

    }
    const { _id,photo, brand, name, price, description } = cart
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src= {photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p>{name}</p>
                <p>{price}</p>
                <p>{description }</p>
                <div className="card-actions ">
                    <button onClick={()=>handledelete(_id)} className="btn btn-secondary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;