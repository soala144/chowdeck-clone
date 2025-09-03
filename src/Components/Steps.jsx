import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const dummySteps = [
  {
    bg: "bg-orange-400",
    img: "/drink.svg",
    title: "Explore Categories",
    items: ["star", "01", "02", "03"],
    content: ["Star", "Step 1", "Step 2", "Step 3"],
  },
  {
    bg: "bg-green-400",
    img: "/meal.png",
    title: "Order Meals",
    items: ["star", "01", "02", "03"],
    content: ["Star", "Order", "Pay", "Enjoy"],
  },
  {
    bg: "bg-blue-400",
    img: "/pickup.png",
    title: "Pickup & Delivery",
    items: ["star", "01", "02", "03"],
    content: ["Star", "Pickup", "Deliver", "Rate"],
  },
];

const COUNTDOWN_TIME = 2; // seconds per item

const Steps = () => {
  const [stepIdx, setStepIdx] = useState(0);
  const [activeItem, setActiveItem] = useState(0);
  const timerRef = useRef();

  // Handle countdown and item switching
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      // Move to next step and next div in sequence
      let nextStepIdx = stepIdx;
      let nextActiveItem = activeItem + 1;
      if (nextActiveItem >= dummySteps[stepIdx].items.length) {
        nextActiveItem = 0;
        nextStepIdx = (stepIdx + 1) % dummySteps.length;
      } else {
        nextStepIdx = (stepIdx + 1) % dummySteps.length;
      }
      setStepIdx(nextStepIdx);
      setActiveItem(nextActiveItem);
    }, COUNTDOWN_TIME * 1000);
    return () => clearTimeout(timerRef.current);
  }, [activeItem, stepIdx]);

  // Helper to get previous and next positions in the sequence
  const getPrev = () => {
    let prevStepIdx = stepIdx;
    let prevActiveItem = activeItem - 1;
    if (prevActiveItem < 0) {
      prevStepIdx = (stepIdx - 1 + dummySteps.length) % dummySteps.length;
      prevActiveItem = dummySteps[prevStepIdx].items.length - 1;
    }
    return { stepIdx: prevStepIdx, activeItem: prevActiveItem };
  };
  const getNext = () => {
    let nextStepIdx = stepIdx;
    let nextActiveItem = activeItem + 1;
    if (nextActiveItem >= dummySteps[stepIdx].items.length) {
      nextStepIdx = (stepIdx + 1) % dummySteps.length;
      nextActiveItem = 0;
    }
    return { stepIdx: nextStepIdx, activeItem: nextActiveItem };
  };

  // Arrow controls
  const handlePrev = () => {
    const prev = getPrev();
    setStepIdx(prev.stepIdx);
    setActiveItem(prev.activeItem);
  };
  const handleNext = () => {
    const next = getNext();
    setStepIdx(next.stepIdx);
    setActiveItem(next.activeItem);
  };

  const step = dummySteps[stepIdx];

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
    <AnimatePresence mode="wait">
      <motion.div
        key={stepIdx}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${step.bg} w-[90%] m-auto opacity-100 rounded-xl flex flex-col justify-around items-center py-10 shadow-2xl z-[50] relative`} // higher opacity, shadow, z-index
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)", zIndex: 50 }}
      >
        <h1 className="pt-7 text-8xl pb-6 font-bold">{step.title}</h1>
        <div className="flex justify-center items-center w-3/4 m-auto">
          <img src={step.img} alt="step" className="w-full h-[500px]" />
        </div>

        <div className="flex justify-between items-center mx-auto w-[90%] mt-10">
          <div className="flex justify-between gap-2">
            {step.items.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center relative">
                  {item === "star" ? (
                    <CiLocationOn size={32} />
                  ) : (
                    <span className="text-xl font-bold">{item}</span>
                  )}
                  {/* Countdown overlay only on activeItem */}
                  {activeItem === idx && (
                    <div className="absolute top-0 left-0 w-16 h-16 flex items-center justify-center">
                      <CountdownCircle isActive={true} />
                    </div>
                  )}
                </div>
                <span className="mt-2 text-xs">{step.content[idx]}</span>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="justify-between flex gap-2">
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
    </AnimatePresence>
  );
};

export default Steps;
