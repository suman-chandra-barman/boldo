import React from "react";
import ServiceCard from "./ServiceCard";
import service1 from "../../../assets/services/service1.png";
import service2 from "../../../assets/services/service2.png";
import service3 from "../../../assets/services/service3.png";
import ServiceIncome from "./ServiceIncome";
import ServiceAnalysis from "./ServiceAnalysis";

const OurServices = () => {
  const services = [
    {
      _id: 1,
      title: "Cool feature title",
      image: service1,
      description: "Learning curve network effects return on investment.",
    },
    {
      _id: 2,
      title: "Even cooler feature",
      image: service2,
      description: "Learning curve network effects return on investment.",
    },
    {
      _id: 3,
      title: "Cool feature title",
      image: service3,
      description: "Learning curve network effects return on investment.",
    },
  ];

  return (
    <section className="max-w-[1100px] px-3 mx-auto mt-10 lg:mt-[82px]">
      <div className="text-center md:w-[90%] lg:w-[80%] mx-auto">
        <h2 className="text-xl text-[#777777]">Our Services</h2>
        <p className="text-2xl md:text-3xl lg:text-5xl lg:leading-[72px] mt-3 font-Manrope">
          Handshake infographic mass market crowdfunding iteration.
        </p>
      </div>
      <div className="md:flex col-span-2 gap-[100px] mt-5 md:mt-13 lg:mt-[78px] justify-center mb-14 md:mb-[100px] lg:mb-[195px]">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <ServiceIncome />
      <ServiceAnalysis />
    </section>
  );
};

export default OurServices;
