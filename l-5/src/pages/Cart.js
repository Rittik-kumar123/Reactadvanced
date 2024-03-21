import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
    
    const {cart} = useSelector( (state) => state );
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect( () =>
    {
        setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0))
    },[cart])

    return (
            <div className="w-[100vw] h-[100vw] mt-0">
                {
                    cart.length > 0 ? 
                    (
                        <div className="flex flex-row justify-evenly items-center max-w-6xl p-2 mx-auto space-y-10 space-x-5 max-h-[100vh] mt-10">
                            <div className="w-[48%] mr-7">
                                {
                                    cart.map((item,index) => 
                                    (
                                        <CartItem key={item.id} item ={item} itemIndex={index}></CartItem>
                                    ))
                                }    
                            </div> 
                            <div className="h-[450px] w-[200px] flex flex-col justify-between 
                                             fixed top-10 right-[42px]">
                                <div>
                                    <div className="font-bold uppercase text-s text-green-700">Your Cart</div>   
                                    <div className="font-bold text-3xl uppercase text-lg text-green-700">Summary</div> 

                                    <p>
                                        <span className="text-slate-700 font-semibold">Total Items : {cart.length}</span>    
                                    </p>  
                                </div> 
                                <div>
                                        <p>Total Amount: ${totalAmount}</p>
                                        <button>Check Out</button>
                                </div>
                                </div>
                            </div>  
                    ) :
                    (
                       <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]">
                            <h1 className="font-bold text-lg ">Cart Empty</h1>
                            <NavLink to={'/'}>
                                <button className="bg-green-700 w-[189px] flex justify-center items-center rounded-md
                                                hover:scale-110 transition duration-300 ease-in mt-2 font-semibold text-white py-2 px-3
                                                text-center">
                                    Shop Now
                                </button>
                            </NavLink>
                       </div> 
                    )
                }
            </div>
    );
};

export default Cart;