import React, { useState } from "react";
import { BsHandbag, BsPlus, BsDash, BsHeart } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import farmary from "../assets/Image/farmary.png";


const ProductDetail: React.FC = () => {
  const [quantity, setQuantity] = useState(5);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <><div className="w-[648px] h-[501px] gap-[24px]">
      <div className="border-b-2  ">
        <div className="flex items-center gap-[8px]">
          <h2 className="text-4xl font-semibold text-black">Chinese Cabbage</h2>
          <span className="text-sm text-[#2C742F] bg-[#20B526] px-2 py-1 my-[7px] rounded-md">
            In Stock
          </span>
        </div>

        <div className="flex items-center w-[275px] h-[21px] mt-[12px] text-sm">
          <span className="text-yellow-500">
            <FaStar className="h-[18px] w-[18px]" />
          </span>
          <span className="font-normal text-sm  text-[#666666]">4 Review</span>
          <span className="px-[12px]">•</span>
          <span className="text-[#333333] text-sm font-medium flex gap-[4px]">
            SKU: <p className="text-[#666666] font-normal">2,51,594</p>
          </span>
        </div>

        <div className="flex items-center my-[20px] space-x-4 text-xl">
          <span className="line-through text-[#B3B3B3]">$48.00</span>
          <span className="text-green-600 font-semibold">$17.28</span>
          <span className="text-red-500 text-sm bg-red-100 px-2 py-1 rounded-3xl">
            64% Off
          </span>
        </div>
      </div>

      <div className=" border-b-2  my-[24px]  h-[135px] ">
        <div className="flex items-center justify-between ">
          <div className=" gap-[8px] flex items-center">
            <span className="text-[#1A1A1A] text-sm font-normal">Brand:</span>
            <img src={farmary} className="w-[56px] h-[56px]" />
          </div>

          <div className="flex items-center w-[264px] h-[40px] gap-[10px] ">
            <span className="text-gray-500 font-normal text-sm">
              Share item:
            </span>
            <div className="w-[175px] h-[40px] gap-[5px] flex items-center">
              <FaFacebookF className="cursor-pointer " />
              <FaTwitter className="cursor-pointer" />
              <FaPinterestP className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>
        <p className="text-sm pt-[16px]  font-normal w-[568px] h-[63px] pr-[80px] text-gray-500">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
          ultrices et ipsum. Nulla varius magna a consequat pulvinar.
        </p>
      </div>

      <div className="flex items-center space-x-[12px] py-[18px]   h-[88px]">
        <div className="flex items-center border px-2 py-1 rounded-full space-x-2">
          <button onClick={handleDecrement} className="text-xl rounded-full p-[10px] bg-[#F2F2F2]">
            <BsDash />
          </button>
          <span className="w-6 text-center">{quantity}</span>
          <button onClick={handleIncrement} className="text-xl rounded-full p-[10px] bg-[#F2F2F2]">
            <BsPlus />
          </button>
        </div>

        <button className="flex items-center h-[51px] w-[447px] bg-[#00B207] text-white px-[160px] py-[16px] rounded-full hover:bg-green-700 transition">
          <BsHandbag className="mr-2" /> Add to Cart
        </button>

        <button className="ml-auto text-xl text-gray-500 rounded-full p-[16px] bg-[#F2F2F2] hover:text-red-500 transition">
          <BsHeart />
        </button>
      </div>

      <div className="text-sm text-gray-500 pt-4 border-t">
        <p>
          <strong className="font-medium text-sm text-[#1A1A1A]">Category:</strong> Vegetables
        </p>
        <p>
          <strong className="font-medium text-sm text-[#1A1A1A]">Tag:</strong> Vegetables Healthy <u>Chinese</u> Cabbage Green
          Cabbage
        </p>
      </div>
    </div></>  
  );
};

export default ProductDetail;
