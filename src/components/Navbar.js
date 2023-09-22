import React from 'react';
import { PiHandbag } from 'react-icons/pi';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

function NavigationLink({ href, text }) {
  return (
    <a href={href} className="text-sm font-medium">
      {text}
    </a>
  );
}

function Navbar() {
  return (
    <div className=" text-black py-2 px-4 md:py-3 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl md:text-2xl font-roboto font-semibold">MY COMPANY.COM</div>
        
        <div className="hidden md:flex space-x-4 text-helvetica-now-text">
          <NavigationLink href="#" text="The Edit" />
          <NavigationLink href="#" text="New Arrivals" />
          <NavigationLink href="#" text="Designers" />
          <NavigationLink href="#" text="Clothing" />
          <NavigationLink href="#" text="Shoes" />
          <NavigationLink href="#" text="Bags" />
          <NavigationLink href="#" text="Accessories" />
          <NavigationLink href="#" text="Jewelry" />
          <NavigationLink href="#" text="Beauty" />
        </div>
        
        <div className="flex space-x-4 items-center">
          <AiOutlineSearch className="text-gray-950 h-6 w-6" />
          <PiHandbag className="text-gray-950 h-6 w-6" />
          <AiOutlineUser className="text-gray-950 h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
