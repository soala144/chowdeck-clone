import React from "react";

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
  return (
    <div className="w-[85%] m-auto mb-16">
      <div className="flex gap-3 items-center mb-10">
        <h1 className="text-6xl font-bold">Stories</h1>
        <img src="/Pasta.svg" alt="" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl flex flex-col items-center pb-4 p-0 border-4 border-black overflow-hidden"
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-52 object-cover border-b-4 border-black"
            />
            <div className="flex flex-col items-center justify-between mt-6 text-center px-6 w-full flex-grow min-h-[220px]">
              <div>
                <h2 className="text-xl font-bold mb-2">{story.name}</h2>
                <p className=" mb-6 text-xl font-semibold">{story.content}</p>
              </div>
              <button
                className="bg-gray-200 text-[#0C513F] capitalize w-full py-4 text-xl items-center font-semibold transition-colors duration-200 rounded-md hover:bg-[#0C513F]  hover:text-white"
                style={{ borderRadius: "0.5rem" }}
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
