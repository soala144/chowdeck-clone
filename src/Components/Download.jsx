import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
const Download = () => {
  return (
    <div className="flex w-[90%] md:flex-row flex-col m-auto mb-16 justify-between gap-2 items-center">
      {/* Download */}
      <div className="bg-[#0C513F] md:w-[49%] w-full mx-auto rounded-xl ">
        <div className="w-[90%] m-auto mt-10">
          <h1 className="text-6xl font-bold text-white mb-6">
            Place your <br />
            order in seconds
          </h1>

          <div className="flex md:hidden w-[40%]  justify-between my-4 mb-4 gap-2">
            <div className="bg-white rounded-full p-4">
              <img src="/playstore.png" alt="" className="w-7 h-7" />
            </div>
            <div className="bg-white rounded-full p-4">
              <img src="/apple2.png" alt="" className="w-7 h-7" />
            </div>
          </div>

          <div className="md:flex md:w-[50%] hidden gap-4 flex-col ">
            <button className="flex items-center gap-2 text-[#0C513F] bg-white rounded-xl px-4 py-3 font-medium text-sm  tracking-wide">
              <img src="/playstore.png" alt="Google Play" className="w-5 h-5" />
              <p>Download on Google Play</p>
            </button>

            <button className="flex items-center gap-2 text-[#0C513F] bg-white rounded-xl px-4 py-3 font-medium text-sm  tracking-wide">
              <img src="/apple2.png" alt="App Store" className="w-4 h-4" />
              <p>Download on App Store</p>
            </button>
          </div>
        </div>

        <div className="flex gap-2 w-[95%] md:w-[85%] m-auto mt-28 ">
          <div>
            <img src="/Promo-code.svg" alt="" />

            <div className="flex gap-3 pl-7 border-4 border-black rounded-xl items-center py-3 w-[55%] md:w-[40%] bg-[#FFC501]">
              <div className="w-5 h-5 bg-[#0C513F] rounded-full border-4 border-black"></div>
              <p className="text-xl font-bold">CDNWEB</p>
            </div>

            <p className="mt-5 mb-7 text-xl font-bold">
              Get <span className="text-[#FFC501] ">₦300 off</span> your first
              order when you use this promo code!
            </p>
          </div>

          {/* <figure>
            <img src="/drink.svg" alt="" className="h-60 w-20" />
          </figure> */}
        </div>
      </div>

      {/* Image */}
      <figure className="md:w-[49%] w-full m-auto">
        <img src="/last.webp" alt="last" />
      </figure>
    </div>
  );
};

export default Download;
