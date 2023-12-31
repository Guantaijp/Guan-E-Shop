import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/cart.png'
import profile from '../assets/profile.png'

function Navbar() {
    return (
        <div className="font-sans">
            <div className="flex flex-row justify-around items-center p-6 ">
                <h1 className="text-2xl font-bold text-[#A51910]">GUAN-E-SHOP</h1>
                {/* inputfield */}
                <div className="flex items-center shadow-md rounded-full">
                    <input type="text" placeholder="Search" className="p-2 rounded-full bg-[#BEBEBE]" />
                    {/* <button className="bg-[#A51910] text-white p-2 rounded-lg">Search</button> */}
                </div>
                {/* links to home Product About contact  */}
                <div className="flex flex-row  items-center">
                    <Link to="/" className="p-2  hover:text-[#A51910]">HOME</Link>
                    <Link to="/product" className="p-2  hover:text-[#A51910]">PRODUCT</Link>
                    <Link to="/about" className="p-2  hover:text-[#A51910]">ABOUT</Link>
                    <Link to="/contact" className="p-2  hover:V">CONTACT</Link>
                    <Link to="/cart" className="p-2 mx-4 hover:text-[#A51910]">
                        <img src={cart} alt="cart" className=" w-8 h-8" />
                    </Link>                    <Link to="/profile" className="p-2  hover:text-[#A51910]">
                        <img src={profile} alt="profile" className="w-8 h-8" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
