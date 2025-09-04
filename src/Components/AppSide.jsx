import React, { useState } from "react";

const AppSide = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Customer", "Vendors", "Riders"];

  // Dataset for each tab
  const tabData = {
    0: {
      // Customer
      heading: "Try the App",
      content:
        "Have meals, daily essentials, groceries, meds, and foodstuff delivered to you within minutes from your favourite vendors.",
      image: "/chowdeck-app.png",
    },
    1: {
      // Vendors
      heading: "All in One",
      content:
        "Unlock new levels of growth with seamless product and order management, team access, easy withdrawals, and multi-branch support.",
      image: "/vendor-app.png",
    },
    2: {
      // Riders
      heading: "Become a Champ",
      content:
        "Choose your own working hours, ride your choice of bike, track your metrics, earn bonuses and withdraw easily to your account. Do more with our app.",
      image: "/rider-app.png",
    },
  };

  const currentData = tabData[activeTab];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  p-8">
      {/* Toggle Bar */}
      <div className="relative bg-[#FFF3CC] p-1 rounded-full mb-8">
        {/* Tab buttons */}
        <div className="relative flex">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`
                relative px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ease-in-out
                border-none outline-none cursor-pointer flex-1 z-20
                ${
                  activeTab === index
                    ? "text-gray-800 font-semibold"
                    : "text-gray-600 hover:text-gray-800"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sliding indicator */}
        <div
          className="absolute top-1 bottom-1 bg-yellow-400 rounded-full transition-all duration-300 ease-in-out z-10"
          style={{
            width: `calc(100% / ${tabs.length})`,
            left: `${activeTab * (100 / tabs.length)}%`,
          }}
        />
      </div>

      {/* Dynamic Content Area */}
      <div className="md:max-w-2xl w-full  bg-white p-8 transition-all duration-500 ease-in-out">
        <div className="flex flex-col items-center">
          {/* Image */}

          {/* Content */}
          <div className="flex-1 text-center ">
            <h1 className=" text-3xl md:text-6xl font-bold text-black mb-4 transition-all duration-500 ease-in-out">
              {currentData.heading}
            </h1>
            <p className="text-gray-600 text-xl mt-3 mb-6 leading-relaxed transition-all duration-500 ease-in-out">
              {currentData.content}
            </p>
          </div>
          <div className="flex justify-between my-4 mb-4 gap-2">
            <div className="bg-[#0C513F] rounded-full">
              <img src="/playstore.png" alt="" className="w-14 h-14" />
            </div>
            <div className="bg-[#0C513F] rounded-full">
              <img src="/apple.png" alt="" className="w-14 h-14" />
            </div>
          </div>
          <div className="flex-shrink-0 mt-10 relative">
            {/* Main image */}
            <img
              src={currentData.image}
              alt={currentData.heading}
              className="object-cover rounded-lg transition-all duration-500 ease-in-out"
            />

            {/* Overlay image (top-right corner) */}
            <img
              src="/Pastry.svg"
              alt="overlay"
              className="absolute -top-10 -right-4 md:w-36 md:h-36 h-25 w-25 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSide;
