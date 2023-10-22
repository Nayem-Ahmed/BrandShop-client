import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";
import { useState } from "react";

const Cart = () => {
    const cartloader = useLoaderData()
    // const [cart,setCart] = useState(cartloader)
    console.log(cartloader);
    return (
        <div className="grid grid-cols-3 py-6 gap-7">
            {
                cartloader.map(cart => <MyCart key={cart._id} cart={cart}></MyCart>)
            }
        </div>
    );
};

export default Cart;