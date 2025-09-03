import React from "react";

const Offers = () => {
  return (
    <div className="w-[90%] m-auto items-center flex justify-between">
      <h1 className="text-7xl font-bold text-white">
        Chowdeck has <br />
        you covered
        <span className="inline-block align-baseline">
          <img
            src="/meal.png"
            alt=""
            className="inline-block ml-[-20px] mt-[-35px] h-[2em]"
          />
        </span>
      </h1>

      <p className="text-white text-2xl">
        What do you need? A quick fix on a busy day? <br />
        Last-minute dinner backup? Supplies for the <br />
        week? Download Chowdeck and let’s deliver <br /> happiness to your
        doorstep in minutes.
      </p>
    </div>
  );
};

export default Offers;
