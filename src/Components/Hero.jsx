import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      id="hero-section"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="pt-44 text-center"
    >
      <h1 className="text-4xl md:text-8xl font-bold mb-10"> {texts[index]}</h1>

      {/* Buttons */}
      <div className="flex justify-center flex-col md:flex-row w-[80%] m-auto md:w-full gap-4">
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
    </motion.div>
  );
};

export default Hero;
