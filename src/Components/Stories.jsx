import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Stories = () => {
  const stories = [
    {
      name: "5 Things You Will Not Miss About Nigerian Markets",
      content:
        "Skip the stress of Lagos markets. Order fresh groceries online in Nigeria with Chowdeck; on-time delivery, great prices,...",
      image: "/five-things.png",
    },
    {
      name: "9 Million Dollars After: Chowdeck’s Expansive New Trajectory",
      content:
        "Chowdeck raises funding to expand food & grocery delivery in Nigeria. Faster service, more cities, fresher produce — the...",
      image: "/9million.png",
    },
    {
      name: "Who Still Queues For Groceries",
      content:
        "Skip supermarket queues with fast grocery delivery in Nigeria. Order fresh produce online and get it delivered straight ..",
      image: "/fresh-online.png",
    },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-[95%] max-w-7xl m-auto mt-10 mb-20 md:mt-16"
    >
      <div className="flex gap-3 items-center md:mb-10">
        <h1 className="text-3xl md:text-6xl font-bold">Stories</h1>
        <img src="/Pasta.svg" alt="" className="w-8 md:w-16" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl flex flex-col items-center p-0 border-4 border-black overflow-hidden"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-40 md:h-48 object-cover border-b-4 border-black"
              style={{
                borderTopLeftRadius: "0.75rem",
                borderTopRightRadius: "0.75rem",
              }}
            />
            <div className="flex flex-col items-center justify-between mt-4 md:mt-6 text-center px-3 md:px-6 w-full flex-grow min-h-[180px] md:min-h-[220px] pb-4">
              <div>
                <h2 className="text-base md:text-xl font-bold mb-2">
                  {story.name}
                </h2>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
                  {story.content}
                </p>
              </div>
              <button
                className="bg-gray-200 text-[#0C513F] w-full py-2 font-semibold transition-colors duration-200 rounded-md hover:bg-[#0C513F] hover:text-white text-xs md:text-base"
                style={{ borderRadius: "0.5rem" }}
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stories;
