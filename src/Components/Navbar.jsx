import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center mt-10 cursor-pointer">
        <div className="flex justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-[#0C513F] rounded-full text-white ">
            <img src="/logo.png" alt="Chowdeck" className=" w-40 h-12" />
          </div>
          <div>
            <div className="flex flex-col relative">
              {" "}
              {/* make parent relative */}
              <div
                onMouseEnter={() => setIsOpen1(true)}
                onMouseLeave={() => setIsOpen1(false)}
                className=" bg-white flex justify-between gap-2 items-center py-3 px-4 rounded-full"
              >
                <img src="/NigeriaFlag.svg" alt="" className="w-6 h-6" />
                <p className="text-lg">NG</p>
                <IoIosArrowDropdown size={25} color="#0C513F" />
              </div>
              {isOpen1 && (
                <div
                  onMouseEnter={() => setIsOpen1(true)}
                  onMouseLeave={() => setIsOpen1(false)}
                  className="absolute top-full mt-2 left-0 "
                >
                  <div className="bg-white flex justify-between gap-2 items-center py-3 px-4 rounded-full cursor-pointer border border-gray-200">
                    <img src="/GhanaFlag.svg" alt="" className="w-6 h-6" />
                    <p className="text-lg">Ghana</p>
                  </div>
                  <div className="bg-white flex justify-between gap-2 items-center mt-2 border border-gray-200 py-3 px-4 rounded-full cursor-pointer">
                    <img src="/NigeriaFlag.svg" alt="" className="w-6 h-6" />
                    <p className="text-lg">Nigeria</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Second  */}
        <div className="hidden md:block bg-white rounded-full py-3 px-6">
          <ul className="flex gap-10 text-lg font-medium ">
            <li>Company</li>
            <li>Vendors</li>
            <li>Riders</li>
            <div className="flex flex-col relative">
              {/* Trigger */}
              <div
                className="flex justify-between gap-3 items-center cursor-pointer"
                onMouseEnter={() => setIsOpen2(true)}
                onMouseLeave={() => setIsOpen2(false)}
              >
                <p>Products</p>
                <IoIosArrowDropdown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    isOpen2 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Dropdown */}
              <div
                onMouseEnter={() => setIsOpen2(true)}
                onMouseLeave={() => setIsOpen2(false)}
                className={`absolute top-full right-0 mt-2 flex flex-col items-end space-y-2 transition-all duration-500 origin-top ${
                  isOpen2
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {/* Chowpass */}
                <div className="bg-white flex justify-end items-center mt-3 py-3 px-5 rounded-full cursor-pointer border border-gray-200 text-right transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:text-[#8C77EC] hover:border-[#8C77EC] hover:shadow-lg">
                  <p className="text-lg">Chowpass</p>
                </div>

                {/* Relay */}
                <div className="bg-white flex justify-end items-center py-3 px-5 rounded-full cursor-pointer border border-gray-200 text-right transition-all duration-300 ease-in-out transform hover:translate-x-1 hover:text-pink-500 hover:border-pink-400 hover:shadow-md">
                  <p className="text-lg">Relay</p>
                </div>
              </div>
            </div>
          </ul>
        </div>

        {/* Third */}
        <div className="flex justify-between items-center gap-4">
          <div className="bg-white flex justify-between gap-2 items-center py-3 px-6 rounded-full ">
            <div className="flex flex-col relative">
              {/* Trigger */}
              <div
                className="flex justify-between gap-3 items-center cursor-pointer"
                onMouseEnter={() => setIsOpen3(true)}
                onMouseLeave={() => setIsOpen3(false)}
              >
                <p className="text-xl">More</p>
                <IoIosArrowDropdown
                  size={20}
                  className={`transform transition-transform duration-300 ${
                    isOpen3 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>

              {/* Dropdown */}
              <div
                onMouseEnter={() => setIsOpen3(true)}
                onMouseLeave={() => setIsOpen3(false)}
                className={`absolute top-full right-0 mt-2 flex flex-col items-end space-y-3 transition-all duration-500 origin-top ${
                  isOpen3
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {/* Contact Us - widest */}
                <div className=" bg-white flex justify-end items-center mt-3 py-3 px-6 rounded-full cursor-pointer border border-gray-200 text-right transition-all duration-300 ease-in-out hover:text-purple-600 hover:border-purple-400 hover:shadow-md">
                  <p className="text-lg flex gap-2">
                    Contact <span>Us</span>{" "}
                  </p>
                </div>

                {/* FAQs - medium */}
                <div className=" bg-white flex justify-end items-center py-3 px-6 rounded-full cursor-pointer border border-gray-200 text-right transition-all duration-300 ease-in-out hover:text-pink-500 hover:border-pink-400 hover:shadow-md">
                  <p className="text-lg">FAQs</p>
                </div>

                {/* Blogs - smallest */}
                <div className=" bg-white flex justify-end items-center py-3 px-6 rounded-full cursor-pointer border border-gray-200 text-right transition-all duration-300 ease-in-out hover:text-green-600 hover:border-green-400 hover:shadow-md">
                  <p className="text-lg">Blogs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cart */}
          <div className="bg-white items-center flex py-3 px-4 rounded-full">
            <BiCart size={30} color={"#0C513F"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
