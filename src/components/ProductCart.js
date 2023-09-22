// ProductCart.js
import React from 'react';
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-scroll';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';

function ProductCart() {
  return (
    <div className="bg-white p-4 rounded-lg  w-[324px] h-[536px] mt-5">
      {/* JONATHAN SIMKHAI */}
      <h2 className="font-roboto text-4xl font-normal leading-7 tracking-wide text-left text-black">
        JONATHAN SIMKHAI
      </h2>

      {/* Product Name */}
      <div className="mt-4">
        <p className="w-[254px] h-[42px] text-roboto text-base font-normal leading-5 tracking-normal text-left">
          Lurex Linen Viscose Jacket in Conchiglia
        </p>
      </div>

      {/* Price */}
      <div className="mt-2 flex items-center">
        <p className="w-[33px] h-[17px] text-roboto text-base font-bold leading-5 tracking-normal text-left  text-black">
          $225
        </p>
      </div>

      {/* Card Images */}



      {/* Size Options */}
      <div className="mb-4">
        <p className="text-base  pt-5 font-normal text-gray-950"> <span className='text-black font-semibold'>Color</span> Conchiglia</p>
        <div className='flex space-x-4 mt-4  '>

          <img src={image4} alt="Product 4" className="w-20 h-20" />
          <img src={image5} alt="Product 5" className="w-20 h-20" />
        </div>
        <div className='w-full flex justify-between items-center py-5 font-semibold'>
          <h3>SIZE L</h3>
          <h3>SIZE GUIDE</h3>
        </div>
        {/* Size Options */}
        <div className="flex space-x-4 mt-2">
          {/* Include size buttons here */}
          <button className="w-[78px] h-[30px] font-helvetica-now-text text-base font-normal leading-4 tracking-normal text-center bg-white border border-gray-300 rounded-full">
            xs
          </button>
          <button className="w-[78px] h-[30px] font-helvetica-now-text text-base font-normal leading-4 tracking-normal text-center bg-white border border-gray-300 rounded-full">
            s
          </button>
          <button className="w-[78px] h-[30px] font-helvetica-now-text text-base font-normal leading-4 tracking-normal text-center bg-white border border-gray-300 rounded-full">
            M
          </button>
          <button className="w-[78px] h-[30px] font-helvetica-now-text text-base font-normal leading-4 tracking-normal text-center bg-white border border-gray-300 rounded-full">
            L
          </button>
          <button className="w-[78px] h-[30px] font-helvetica-now-text text-base font-normal leading-4 tracking-normal text-center bg-white border border-gray-300 rounded-full">
            XXL
          </button>

        </div>



      </div>

      {/* Add to Bag */}

      <button className="w-[324px] h-[48px] text-roboto text-base font-normal leading-5 tracking-normal rounded-full bg-black text-white flex items-center justify-center mt-4">
        <span>Add to Bag</span>
        <BsArrowRight className="ml-2" /> {/* Arrow icon with margin */}
      </button>
      <div className="mt-4">
        <p className="text-roboto   text-black pt-4 px-4">
          Get 4 interest-free payments of $196.25 with Klarna
        </p>
        <p className="">
          <Link
            href="#"
            className="text-black  px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Link>
        </p>

        {/* Chat Button */}
        <button className="text-roboto text-base font-normal leading-5 tracking-normal text-left  text-black  py-2 px-4 mt-2">
          Speak to a Personal Stylist CHAT NOW
        </button>

        {/* Learn More */}

      </div>

    </div>
  );
}

export default ProductCart;
