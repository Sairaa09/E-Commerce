import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            vero quod nisi dolore, qui voluptate necessitatibus natus, optio
            nihil illo delectus facilis. Maiores odit voluptas commodi
            exercitationem consequuntur odio eveniet?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-000-000-0000</li>
            <li>usermail@gmail.com</li>
            <li>Instagram</li>
          </ul>         
        </div>
      </div>
      <div>
        <hr className=" border-gray-300" />
        <p className="py-5 text-sm text-center">
              Copyright 2024@ forver.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
