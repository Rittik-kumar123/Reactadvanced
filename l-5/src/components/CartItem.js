import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; 
import {remove} from "../redux/Slices/CardSlics"

const CartItem = ({item,itemIndex}) => {
    
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id))
        toast.error("Removed from cart")
    }

    return (
        <div className="border-b-4 border-gray-700 w-[100%]">
            <div className="mb-2 flex flex-row items-center justify-between">
                <div className="h-[201px] w-[201px]">
                    <img src={item.image} className="h-full w-full"></img>
                </div>
                <div className="w-[201px]">
                    <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
                    <h1 className="w-40 text-gray-400 font-semibold text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ")+"...."}</h1>
                    <div className="flex justify-between gap-12 mt-2">
                        <p className="text-green-600 font-semibold underline">${item.price}</p>
                        <div onClick={removeFromCart}
                            className="bg-green-600 text-xs w-7 h-7 
                            flex justify-center items-center rounded-full text-white">
                            <AiOutlineDelete></AiOutlineDelete>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default CartItem;