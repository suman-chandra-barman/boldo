import React from "react";
import CallToAction from "../Home/CallToAction/CallToAction";
import Navbar from "../Shared/Navbar";
import AboutHeader from "./AboutHeader";
import Gallery from "./Gallery";
import Number from "./Number";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";
import OurValues from "./OurValues";

const About = () => {
  return (
    <section>
      <header className="bg-[#0A2640] text-white pb-[166px]">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <AboutHeader />
        </div>
      </header>
      <Gallery />
      <OurStory />
      <Number />
      <OurTeam />
      <OurValues />
      <div className="mb-[144px]">
        <CallToAction />
      </div>
    </section>
  );
};

export default About;
