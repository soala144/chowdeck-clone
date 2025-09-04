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
    <div className="w-[95%] flex flex-col md:flex-row m-auto my-10 border-4 border-black items-stretch rounded-xl overflow-hidden">
      {/* Left side - Image with overlay text */}
      <div className="flex-1 relative min-h-[200px]">
        <img
          src="/Capture.PNG"
          alt="Interactive restaurant map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Restaurant list */}
      <div className="w-full md:w-[450px] border-t-4 md:border-t-0 md:border-l-4 border-black flex flex-col custom-scrollbar">
        {/* Header */}
        <div className="flex bg-[#99C8FF] items-center border-b-4 border-black p-2 md:p-4">
          <div className="bg-orange-300 h-3.5 w-3.5 border-4 border-black rounded-full mr-2 md:mr-3"></div>
          <h1 className="font-bold text-lg md:text-2xl">Restaurants</h1>
        </div>

        {/* Scrollable restaurant list */}
        <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-2 md:space-y-3 max-h-[300px] md:max-h-[600px]">
          {lagosRestaurants.map((restaurant, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-3 md:p-4 flex items-center justify-between transition-shadow cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-base md:text-xl text-gray-800">
                  {restaurant.name}
                </h3>
              </div>
              <div className="ml-2 md:ml-3 bg p-2 bg-[#F2FCF9] rounded-full">
                <BiCart className="w-4 md:w-5 h-4 md:h-5 text-[#0C513F] hover:text-blue-600 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
