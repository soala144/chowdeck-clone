import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const stepsData = [
  {
    bg: "#f59e42",
    img: "/african-meals.svg",
    title: "Get Started in three",
  },
  {
    bg: "#0C513F",
    img: "/Fastfoodxsnacks.svg",
    title: "Download the app",
  },
  {
    bg: "#3B82F6",
    img: "/drink.svg",
    title: "Explore Categories",
  },
  {
    bg: "#2563eb",
    img: "/Fitfam.svg",
    title: "Pickup & Delivery",
  },
  {
    bg: "#eab308",
    img: "/Pack.svg",
    title: "Unpack and Enjoy",
  },
];

const COUNTDOWN_TIME = 3; // seconds per item
const divs = [
  { type: "location", icon: <CiLocationOn size={32} /> },
  { type: "step", label: "01" },
  { type: "step", label: "02" },
  { type: "step", label: "03" },
  { type: "star", img: "/Star.jpeg" },
];

const Steps = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const [activeDiv, setActiveDiv] = useState(0);
  const timerRef = useRef();

  // Only change image, title, bg when activeDiv changes
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      // Move to next div and update stepIdx so UI changes every time
      let nextDiv = (activeDiv + 1) % divs.length;
      let nextStepIdx = (stepIdx + 1) % stepsData.length;
      setActiveDiv(nextDiv);
      setStepIdx(nextStepIdx);
    }, COUNTDOWN_TIME * 1000);
    return () => clearTimeout(timerRef.current);
  }, [activeDiv, stepIdx]);

  // Arrow controls
  const handlePrev = () => {
    let prevDiv = activeDiv - 1;
    let prevStepIdx = (stepIdx - 1 + stepsData.length) % stepsData.length;
    if (prevDiv < 0) {
      prevDiv = divs.length - 1;
    }
    setActiveDiv(prevDiv);
    setStepIdx(prevStepIdx);
  };
  const handleNext = () => {
    let nextDiv = (activeDiv + 1) % divs.length;
    let nextStepIdx = (stepIdx + 1) % stepsData.length;
    setActiveDiv(nextDiv);
    setStepIdx(nextStepIdx);
  };

  const step = stepsData[stepIdx];

  // Countdown circle animation
  const CountdownCircle = ({ isActive }) => (
    <svg width="64" height="64" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="#fff" />
      <motion.circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="#f59e42"
        strokeWidth="4"
        strokeDasharray={2 * Math.PI * 28}
        strokeDashoffset={isActive ? 2 * Math.PI * 28 : 0}
        animate={{
          strokeDashoffset: isActive ? 0 : 2 * Math.PI * 28,
        }}
        transition={{ duration: COUNTDOWN_TIME, ease: "linear" }}
      />
    </svg>
  );

  return (
    <motion.div
      key={stepIdx}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundColor: step.bg }}
      transition={{
        backgroundColor: { duration: 0.6 },
        opacity: { duration: 0.3 },
      }}
      className={`w-[95%] m-auto opacity-100 rounded-xl flex flex-col justify-around items-center py-6 md:py-10 shadow-2xl relative mt-16 md:mt-32`}
      style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
    >
      <h1 className="pt-4 md:pt-7 text-3xl md:text-8xl pb-4 md:pb-6 font-bold text-center">
        {step.title}
      </h1>
      <div className="flex justify-center items-center w-full md:w-3/4 m-auto">
        <motion.img
          key={step.img}
          src={step.img}
          alt="step"
          className="w-full h-48 md:h-[500px] object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-full md:w-[90%] mt-6 md:mt-10 gap-4 md:gap-0">
        <div className="flex justify-between gap-2">
          {divs.map((div, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="md:w-16 md:h-16 h-12 w-12 rounded-full bg-white flex items-center justify-center relative">
                {div.type === "location" && div.icon}
                {div.type === "step" && (
                  <span className="md:text-xl font-bold">{div.label}</span>
                )}
                {div.type === "star" && (
                  <img
                    src={div.img}
                    alt="star"
                    className="md:w-10 md:h-10 rounded-full"
                  />
                )}
                {/* Countdown overlay only on activeDiv */}
                {activeDiv === idx && (
                  <div className="absolute top-0 left-0 md:w-16 md:h-16 h-12 w-12 flex items-center justify-center">
                    <CountdownCircle isActive={true} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="justify-between hidden  md:flex gap-2">
          <button
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </button>
          <button
            className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
            onClick={handleNext}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Steps;
