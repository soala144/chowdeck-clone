import React from "react";

const Offers = () => {
  return (
    // <div className="w-[95%] m-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 py-6 md:py-12">
    //   <h1 className="md:text-7xl font-bold text-white text-3xl   md:text-left">
    //     Chowdeck has <br />
    //     you covered
    //     <span className="inline-block align-baseline">
    //       <imge
    //         src="/meal.png"
    //         alt=""
    //         className="inline-block ml-[-10px] md:ml-[-20px] mt-[-15px] md:mt-[-35px] h-10 md:h-[2em]"
    //       />
    //     </span>
    //   </h1>

    //   <p className="text-white text-base md:text-2xl text-center md:text-left mt-4 md:mt-0">
    //     What do you need? A quick fix on a busy day?{" "}
    //     <br className="hidden md:block" />
    //     Last-minute dinner backup? Supplies for the{" "}
    //     <br className="hidden md:block" />
    //     week? Download Chowdeck and let’s deliver{" "}
    //     <br className="hidden md:block" /> happiness to your doorstep in
    //     minutes.
    //   </p>
    // </div>

    <div className="w-[95%] m-auto flex flex-col md:flex-row  justify-between gap-6 md:gap-0 py-6 md:py-12">
      <h1 className="md:text-7xl md:block font-bold text-white text-3xl hidden">
        Chowdeck has <br />
        you covered
        <span className="inline-block align-baseline">
          <img
            src="/meal.png"
            alt=""
            className="inline-block md:ml-[-20px] md:mt-[-35px] ml-[-10px] mt-[-25px] h-[2em]"
          />
        </span>
      </h1>

      <div className="flex md:hidden items-center">
        <h1 className="font-bold text-white text-3xl ">
          Chowdeck <br /> has <br />
          you covered
        </h1>
        <img src="/meal.png" alt="" />
      </div>

      <div className="text-lg md:hidden blockfont-semibold text-white">
        What do you need? A quick fix on a busy day? Last-minute dinner backup?
        Supplies for the week? Download Chowdeck and let’s deliver happiness to
        your doorstep in minutes.
      </div>
      <p className="text-white hidden md:block text-lg md:text-2xl">
        What do you need? A quick fix on a busy day? <br />
        Last-minute dinner backup? Supplies for the <br />
        week? Download Chowdeck and let’s deliver <br /> happiness to your
        doorstep in minutes.
      </p>
    </div>
  );
};

export default Offers;
