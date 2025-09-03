import React from "react";
import { TiStarburst } from "react-icons/ti";
import { BiSolidCircleHalf } from "react-icons/bi";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Network = () => {
  const items = [
    {
      name: "Start selling",
      content:
        "Do you own a restaurant, store, or pharmacy? Join our network to reach new customers and grow your business with ease.",
      icon: <TiStarburst size={38} className="text-blue-500" />,
      lastImage: "firstcoll.webp",
    },
    {
      name: "Deliver happiness",
      content:
        "Join our elite league of delivery riders delivering happiness to customers and earn to achieve your dreams while at it.",
      icon: (
        <BiSolidCircleHalf
          size={38}
          className="text-green-500 transform rotate-270"
        />
      ),
      lastImage: "secondcoll.webp",
    },
    {
      name: "Behind the scenes",
      content:
        "If you are passionate about helping us achieve our goal to deliver meals seamlessly, come join the team.",
      image: "/Star.jpeg",
      lastImage: "thirdcoll.webp",
    },
  ];

  return (
    <div className="w-[90%] m-auto bg-white mb-36 ">
      {/* Heading */}
      <div className="flex flex-col items-center mb-8 justify-center w-full">
        <div className="flex items-center gap-3">
          <h2 className="text-6xl font-bold text-gray-300">
            Join our growing network
          </h2>
          <FaArrowDown className="text-6xl text-gray-300" />
        </div>
      </div>

      {/* Items */}
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="border-8 w-[430px] border-black rounded-xl shadow-sm flex flex-col transition hover:shadow-lg"
          >
            {/* Top section */}
            <div className=" mb-4 min-h-[280px] pb-2 p-6 ">
              {/* Icon or Image */}
              {item.icon ? (
                <div className="mb-2 flex justify-start ">{item.icon}</div>
              ) : (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 mb-2"
                />
              )}

              {/* Title */}
              <h3 className="text-[28px]  font-extrabold mb-4 text-left">
                {item.name}
              </h3>

              {/* Content */}
              <p className=" text-[16px] text-left mb-4">{item.content}</p>

              <p className="uppercase items-center font-bold flex gap-2 mb-2">
                {" "}
                See More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </p>
            </div>

            {/* Last image touches border */}
            <div className="w-full  border-4 border-black"></div>
            <img
              src={item.lastImage}
              alt={item.name}
              className="rounded-b-lg w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Network;
