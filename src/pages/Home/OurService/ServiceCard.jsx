import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { image, title, description } = service;
  return (
    <div className="w-full mt-8 md:mt-0">
      <figure>
        <img src={image} alt="service" className="w-full" />
      </figure>
      <div className="mt-6">
        <h2 className="text-2xl mb-[2px]">{title}</h2>
        <p className="text-xl text-[#777777]">{description}</p>
        <div className="card-actions mt-7">
          <button
            type="button"
            className="font-bold text-xl flex items-center gap-3 border-b text-[#0A2640] border-b-[#0A2640] pb-2"
          >
            Explore page <FaArrowRight className="w-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
