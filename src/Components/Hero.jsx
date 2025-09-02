import React, { useState, useEffect } from "react";
const Hero = () => {
  const texts = [
    "Have you eaten?",
    "Ị nọrọla nri? ",
    "Ṣe o ti jẹun? ",
    "Kun ci abinci?",
    "You don chow? ",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <div className="pt-44 text-center">
      <h1 className="text-4xl md:text-8xl font-bold mb-10"> {texts[index]}</h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        {/* Google Play */}
        <button className="flex items-center gap-2 bg-[#0C513F] text-white rounded px-8 py-4 font-medium text-sm uppercase tracking-wide">
          <img src="/playstore.png" alt="Google Play" className="w-9 h-9" />
          <p>Download on Google Play</p>
        </button>

        {/* App Store */}
        <button className="flex items-center gap-2 bg-[#0C513F] text-white rounded px-8 py-4 font-medium text-sm uppercase tracking-wide">
          <img src="/apple.png" alt="App Store" className="w-9 h-9" />
          <p>Download on App Store</p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
