import React from "react";

import { BiCart } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const Map = () => {
  // Sample restaurant array - replace with your actual data
  const lagosRestaurants = [
    { name: "Honeysuckle" },
    { name: "Papa's Pizza" },
    { name: "Mega Chicken" },
    { name: "Ajishafe" },
    { name: "Burger King" },
    { name: "Mama JB Takeout Restaurant" },
    { name: "Jay’s Diner" },
    { name: "King Glab" },
    { name: "Korede Spaghetti" },
    { name: "Panarotti’s Pizza" },
    { name: "Fruits2Go" },
    { name: "Amoke Oge" },
    { name: "Saminu Kilishi" },
    { name: "KFC" },
    { name: "Debonair’s Pizza" },
    { name: "Mr Biggs" },
    { name: "Yakoyo" },
    { name: "Labule" },
    { name: "Red Gourmet Kitchen" },
    { name: "El Padrino’s" },
    { name: "Iyan Aladuke" },
    { name: "The Place" },
    { name: "Cubana Fish" },
    { name: "DO Bowls" },
    { name: "Food Fusion" },
    { name: "Johnny Rocket" },
    { name: "Papiees Maestro" },
    { name: "Keje Grill" },
    { name: "Ojuelegba Restaurant" },
    { name: "So Fresh" },
    { name: "Eden Life" },
    { name: "Korean Wife’s Table" },
    { name: "Squizz’d" },
    { name: "Cookie Nation" },
    { name: "Old English" },
  ];

  return (
    <div className="w-[80%] m-auto my-10 border-4 border-black flex items-stretch rounded-xl overflow-hidden">
      {/* Left side - Image with overlay text */}
      <div className="flex-1 relative">
        <img
          src="/map.png"
          alt="Interactive restaurant map"
          className="w-full h-full object-cover"
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="backdrop-blur-md bg-white/30 bg-opacity-70 text-white px-6 py-4 rounded-lg mb-3 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CiLocationOn className="w-5 h-5 text-orange-400" />
              <span className="font-bold text-sm">
                Click on any live location to order from restaurants near you
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Restaurant list */}
      <div className="w-[450px]  border-l-4 border-black flex flex-col custom-scrollbar">
        {/* Header */}
        <div className="flex bg-[#99C8FF] items-center border-b-4 border-black p-4">
          <div className="bg-orange-300 h-3.5 w-3.5 border-4 border-black rounded-full mr-3"></div>
          <h1 className="font-bold text-2xl">Restaurants</h1>
        </div>

        {/* Scrollable restaurant list */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[600px]">
          {lagosRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-4 py-4 px-3 flex items-center justify-between transition-shadow cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-xl text-gray-800">
                  {restaurant.name}
                </h3>
              </div>
              <div className="ml-3 bg p-2 bg-[#F2FCF9] rounded-full">
                <BiCart className="w-5 h-5 text-[#0C513F] hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
