import React, { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import {
  Users,
  Navigation,
  RotateCcw,
  Truck,
  Bike,
  Building,
  FileText,
  Phone,
  Twitter,
  Instagram,
} from "lucide-react";

const Navbar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [outOfHero, setOutOfHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
      // Check if user is out of Hero section (assume Hero is 100vh)
      const hero = document.querySelector("#hero-section");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setOutOfHero(rect.bottom <= 0);
      } else {
        setOutOfHero(scrollY > window.innerHeight * 0.8);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { name: "Customers", icon: Users, color: "text-orange-400" },
    { name: "Chowpass", icon: Navigation, color: "text-purple-400" },
    { name: "Relay", icon: RotateCcw, color: "text-gray-400" },
    { name: "Vendors", icon: Truck, color: "text-teal-400" },
    { name: "Riders", icon: Bike, color: "text-green-400" },
    { name: "Company", icon: Building, color: "text-orange-400" },
    { name: "Blog", icon: FileText, color: "text-teal-400" },
    { name: "Contact", icon: Phone, color: "text-yellow-400" },
    { name: "Twitter", icon: Twitter, color: "text-blue-400" },
    { name: "Instagram", icon: Instagram, color: "text-purple-400" },
  ];

  return (
    <>
      <div
        className={`hidden md:fixed md:flex top-0 left-0 w-full z-50 transition-all duration-500 `}
      >
        <div
          className={`container mx-auto flex justify-between items-center cursor-pointer transition-all duration-500 ${
            scrolled ? "mt-2" : "mt-10"
          }`}
        >
          <div className="flex justify-between items-center gap-4">
            <div
              className={`text-2xl font-bold bg-[#0C513F] rounded-full text-white ${
                outOfHero ? "shadow-lg" : ""
              }`}
            >
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
                  <img
                    src="/NigeriaFlag.svg"
                    alt=""
                    className={`w-6 h-6 ${outOfHero ? "shadow-lg" : ""}`}
                  />
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
          <div
            className={`hidden md:block bg-white rounded-full py-3 px-6 ${
              outOfHero ? "shadow-lg" : ""
            }`}
          >
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
            <div
              className={`bg-white flex justify-between gap-2 items-center py-3 px-6 rounded-full ${
                outOfHero ? "shadow-lg" : ""
              }`}
            >
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
            <div
              className={`bg-white items-center flex py-3 px-4 rounded-full ${
                outOfHero ? "shadow-lg" : ""
              }`}
            >
              <BiCart size={30} color={"#0C513F"} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div
        className={`flex pl-6 fixed md:hidden gap-3 z-50 w-[90%] m-auto  justify-between transition-all duration-500 ${
          scrolled ? "mt-2" : "mt-10"
        }`}
      >
        {/* nav */}
        <div className="flex gap-3">
          <a
            className={`bg-[#0C513F] items-center justify-center rounded-full p-4 ${
              outOfHero ? "shadow-lg" : ""
            }`}
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 84.52 83.51"
              width="21"
              height="24"
            >
              <path
                d="M84.34 48.29c-3.59 19.39-20.88 35.2-41.31 35.2a43.1 43.1 0 0 1-24.5-7.65S.05 83.32.05 83.32l7.23-18.88C2.99 57.99.46 50.31.46 42.03c0-23.05 19.52-42 42.57-42 21.45 0 39.11 16.18 41.46 37-22.12-.3-28.84-4.16-33.17-7.18a11.03 11.03 0 0 0-2.6-1.33c-1.89-.83-3.98-1.29-6.17-1.29-8.48 0-14.53 5.21-14.53 13.7s6.46 13.69 14.94 13.69c1.32 0 2.61-.17 3.83-.48 2.22-.48 3.65-1.27 3.65-1.27C64 45.4 80.86 47.18 84.33 48.3Z"
                style={{
                  fill: "#ffcf1f",
                  stroke: "#ffcf1f",
                  strokeMiterlimit: 10,
                  strokeWidth: ".05px",
                }}
              />
            </svg>
          </a>

          <div
            className={` bg-white  items-center p-4 rounded-full ${
              outOfHero ? "shadow-lg" : ""
            }`}
          >
            <img src="/NigeriaFlag.svg" alt="" className="w-6 h-6" />
          </div>
        </div>

        {/* hamburger */}
        <div className="flex gap-3">
          <div
            className={`bg-white items-center flex p-3 rounded-full ${
              outOfHero ? "shadow-lg" : ""
            }`}
          >
            <BiCart size={30} color={"#0C513F"} />
          </div>
          <button
            className={`bg-[#0C513F] items-center p-3 rounded-full focus:outline-none ${
              outOfHero ? "shadow-lg" : ""
            }`}
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <GiHamburgerMenu size={30} className="text-gray-100" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      {/* Mobile Sidebar Overlay & Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Sidebar */}
          <div
            className="fixed top-0 left-0 h-full w-full bg-black z-50 flex flex-col shadow-2xl transform transition-transform duration-800 ease-in-out"
            style={{
              transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            <div className="sticky top-0 left-0 w-full bg-black flex items-center justify-end space-x-2 pt-10 pb-6 border-b border-b-white-20">
              <div className="bg-white items-center flex p-3 rounded-full">
                <BiCart size={30} color={"#0C513F"} />
              </div>
              <button
                className="text-white text-xl items-center flex p-3 rounded-full mr-3 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaX size={26} />
              </button>
            </div>
            {/* Nav */}
            <nav className="flex-1 overflow-y-auto">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center pl-3 space-x-3 px-3 py-4 border border-b-gray-100 rounded-md hover:bg-gray-900 cursor-pointer transition-colors duration-150"
                  >
                    <IconComponent className={`w-5 h-5 ${item.color}`} />
                    <span className="text-white text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </nav>
            <div className="text-xs text-center py-10 border-t border-[#ffffff66]">
              <p className="text-gray-100">
                © All Rights Reserved. 2022, Chowdeck Logistics Inc.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
