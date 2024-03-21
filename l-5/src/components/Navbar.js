import React from "react";
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const {cart} = useSelector( (state) => state );
    return (
        <div>
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <NavLink to="/">
                    <div className="w-[150px] h-[100px] mt-[7px]">
                        <img src="logo.png" className="h-14"></img>
                    </div>
                </NavLink>
                <div className="flex flex-row items-center font-medium text-slate-100 mr-5 space-x-6 mb-8">
                    <NavLink to='/'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='/Cart'>
                        <div className="relative">
                            <FaShoppingCart className="text-2xl"></FaShoppingCart>
                            {
                                cart.length>0 &&
                                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 
                                    flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
                            }
                        </div>
                    </NavLink>
                    
                </div>
            </div>

        </div>
    );
};

export default Navbar;