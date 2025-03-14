import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink,Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const{setshowSearch,getCartCount} = useContext(ShopContext)

  const [visible, setvisible] = useState(false)

  return (
    <div className="flex item-center justify-between py-5 font-medium">
      <Link to='/'><img src={assets.logo} alt="logo" className="w-36" /></Link>
      <ul className="hidden sm:flex gap-5 text-md text-slate-700">
        <NavLink
          to="/"
          className="cursor-pointer flex flex-col items-center  gap-1"
        >
          <p>HOME</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="cursor-pointer flex flex-col items-center  gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="cursor-pointer flex flex-col items-center  gap-1"
        >
          <p>ABOUT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="cursor-pointer flex flex-col items-center  gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-1/2 border-none h-[1.5px] bg-slate-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
          onClick={()=>setshowSearch(true)}
        />

        <div className="group relative">
        <Link to='/login'>
        <img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 cursor-pointer"
          /></Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 pl-5 py-3 bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <Link to='/orders'><p className="cursor-pointer hover:text-black">Orders</p></Link>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link  to='/cart' className="relative">
         <img src={assets.cart_icon} alt="cart-icon" className="w-5 min-w-5 cursor-pointer" />
         <p className=" absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white text-[8px] rounded-full">{getCartCount()}</p>
        </Link>
        <img src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer sm:hidden" onClick={()=>setvisible(true)}/>
   
   {/* Sidebar for small screens */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full' : 'w-0'} `}>
           <div className="flex flex-col text-gray-600">
            <div className="flex items-center gap-4 p-3 border border-b-gray-400 border-x-white text-lg" onClick={()=>setvisible(false)}>
                <img src={assets.dropdown_icon} alt="dropdown-icon" className="h-4 rotate-180 cursor-pointer" />
                <p className="cursor-pointer">Back</p>
            </div>
            <NavLink onClick={()=>setvisible(false)} className="py-3 pl-7 border border-b-gray-400 border-t-white border-x-white  " to='/'>HOME</NavLink>
            <NavLink onClick={()=>setvisible(false)} className="py-3 pl-7 border border-b-gray-400 border-t-white border-x-white  " to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setvisible(false)} className="py-3 pl-7 border border-b-gray-400 border-t-white border-x-white  " to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setvisible(false)} className="py-3 pl-7 border border-b-gray-400 border-t-white border-x-white  " to='/contact'>CONTACT</NavLink>
            <NavLink onClick={()=>setvisible(false)} className="py-3 pl-7 border border-b-gray-400 border-t-white border-x-white  " to='/admin-panel'>ADMIN PANEL</NavLink>
           </div>
         </div>
      </div>
    </div>
  );
};

export default Navbar;
