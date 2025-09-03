import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaShoppingCart,
  FaUtensils,
  FaLeaf,
  FaClock,
  FaStore,
  FaBriefcaseMedical,
  FaUserPlus,
  FaBell,
} from "react-icons/fa";
const Adverts = () => {
  const marqueeItems = [
    {
      title: "Quick-grab groceries",
      icon: <FaShoppingCart className="text-green-600" />,
    },
    {
      title: "Quality meal choices",
      icon: <FaUtensils className="text-red-500" />,
    },
    {
      title: "Fresh Market Picks",
      icon: <FaLeaf className="text-green-500" />,
    },
    {
      title: "24/7 for customers and Vendors",
      icon: <FaClock className="text-yellow-500" />,
    },
    {
      title: "Essential Healthcare Supply",
      icon: <FaBriefcaseMedical className="text-blue-500" />,
    },
    {
      title: "Quick and easy Onboarding",
      icon: <FaUserPlus className="text-purple-500" />,
    },
    {
      title: "Live update on orders",
      icon: <FaBell className="text-pink-500" />,
    },
    {
      title: "Highly rated riders",
      icon: <FaStore className="text-indigo-500" />,
    },
  ];

  return (
    <div>
      <Marquee className="py-6" gradient={false} speed={150}>
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/10 flex items-center px-6 py-4 rounded-xl gap-3 shadow-md mx-4"
          >
            {item.icon}
            <p className="text-xl font-medium text-white">{item.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Adverts;
