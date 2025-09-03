import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Steps = () => {
  return (
    <div className="bg-orange-400 w-[90%] m-auto opacity-99 rounded-xl  flex flex-col justify-around items-center py-10 ">
      <h1 className="pt-7 text-8xl pb-6 font-bold">Explore Categories</h1>
      <div className="flex justify-center items-center w-3/4 m-auto">
        <img src="/drink.svg" alt="drink" className="w-full h-[500px]" />
      </div>

      <div className="flex justify-between items-center mx-auto w-[90%] mt-10">
        <div className="flex justify-between gap-2 ">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <CiLocationOn size={32} />
          </div>
          {["01", "02", "03"].map((tab, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white flex text-xl items-center justify-center">
                {tab}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="justify-between flex gap-2">
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <FaArrowLeft />
          </button>
          <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Steps;
