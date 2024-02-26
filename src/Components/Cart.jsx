import { useLoaderData } from "react-router-dom";
import MyCart from "./MyCart";
import { useState } from "react";

const Cart = () => {
    const cartloader = useLoaderData()
    const [cartt,setCart] = useState(cartloader)
    return (
        <div className="grid grid-cols-3 py-6 gap-7 p-5">
            {
                cartt.map(cart => <MyCart key={cart._id} cartt={cartt} setCart={setCart} cart={cart}></MyCart>)
            }
        </div>
    );
};

export default Cart;