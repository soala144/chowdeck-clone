import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AppSide from "./Components/AppSide";
import Network from "./Components/Network";

const App = () => {
  return (
    <div className="">
      <div
        style={{
          background: "url('/hero-background.svg') no-repeat center center",
          backgroundSize: "cover",
        }}
        className="min-h-screen flex flex-col"
      >
        <Navbar />
        <Hero />
      </div>
      <AppSide />
      <Network />

      <div className="bg-[#0C513F] "></div>
    </div>
  );
};

export default App;
