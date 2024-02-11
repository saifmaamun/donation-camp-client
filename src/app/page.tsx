import HeroSection from "@/components/ui/HeroSection";
import React from "react";
import Donations from "./donations/page";
import JoinUs from "@/components/ui/JoinUs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <JoinUs />
      {/* <div className="mt-20  text-4xl text-center">
        <h1>Some of Our Events</h1>
      </div>
      <Donations /> */}
    </>
  );
};

export default Home;
