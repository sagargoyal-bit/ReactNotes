import { useState } from "react";
import { useSelector } from "react-redux";
import Fooditems from "./FoodItems";

const Cart =()=>{
    const a = useState();
    console.log(a);
    const cartItems=useSelector((store)=>store.cart.items)
    return (
      <>
        <p className="text-3xl font-semibold">Total Cart Items-{cartItems.length}</p>
        <div className="flex flex-wrap">
            {cartItems.map((items) => {
            return (<Fooditems key={items.id} {...items} />)
            })}
        </div>
      </>
    );
}

export default Cart;