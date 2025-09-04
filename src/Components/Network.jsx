import React from "react";
import { TiStarburst } from "react-icons/ti";
import { BiSolidCircleHalf } from "react-icons/bi";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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

  // Variants for animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="md:w-[95%] w-[85%] m-auto bg-white mb-56 md:mb-36 ">
      {/* Heading */}
      <motion.div
        className="flex flex-col items-center mb-8 justify-center w-full"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-3">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-300">
            Join our growing network
          </h2>
          <FaArrowDown className="text-6xl text-gray-300" />
        </div>
      </motion.div>

      {/* Items */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="border-8 w-full md:w-[430px] border-black rounded-xl shadow-sm flex flex-col transition hover:shadow-lg mb-6 md:mb-0"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index} // pass index for staggered delay
          >
            {/* Top section */}
            <div className="mb-2 md:mb-4 min-h-[180px] md:min-h-[280px] pb-2 p-4 md:p-6 ">
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
              <h3 className="text-lg md:text-[28px] font-extrabold mb-2 md:mb-4 text-left">
                {item.name}
              </h3>

              {/* Content */}
              <p className="text-sm md:text-[16px] text-left mb-2 md:mb-4">
                {item.content}
              </p>

              <p className="uppercase items-center font-bold flex gap-2 mb-2 text-xs md:text-base">
                See More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </p>
            </div>

            {/* Last image touches border */}
            <div className="w-full border-4 border-black"></div>
            <img
              src={item.lastImage}
              alt={item.name}
              className="rounded-b-lg w-full h-24 md:h-40 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Network;
