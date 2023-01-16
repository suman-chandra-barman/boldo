import React from "react";
import { FaEye, FaFeather, FaSun } from "react-icons/fa";
import wemen from "../../../assets/services/wemenWithPhone.png";
import CircleChat from "./CircleChat";

const ServiceAnalysis = () => {
  return (
    <section className="my-12 md:my-[100px] lg:my-[200px]">
      <div className="md:flex gap-[120px] justify-center">
        <article className="md:w-1/2 md:mt-16">
          <h3 className=" text-2xl md:text-4xl font-Manrope">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="flex px-5 gap-[20px] rounded  shadow-[0_4px_32px_rgba(0,0,0,0.08)] mt-5 md:mt-[40px] hover:bg-[#0A2640] hover:text-white py-4">
            <FaFeather className="text-2xl" />
            <p className="text-base font-semibold">
              We connect our customers with the best.
            </p>
          </div>
          <div className="flex px-5 gap-[20px] rounded  shadow-[0_4px_32px_rgba(0,0,0,0.08)] mt-4 hover:bg-[#0A2640] hover:text-white py-4">
            <FaEye className="text-2xl" />
            <p className="text-base font-semibold">
              Advisor success customer launch party.
            </p>
          </div>
          <div className="flex px-5 gap-[20px] mt-6 rounded shadow-[0_4px_32px_rgba(0,0,0,0.08)]  py-4 hover:bg-[#0A2640] hover:text-white">
            <FaSun className="text-2xl" />
            <p className="text-base font-semibold">
              Business-to-consumer long tail.
            </p>
          </div>
        </article>
        <figure className="md:w-1/2 rounded-[24px] relative mt-10 md:mt-0">
          <img src={wemen} alt="men with phone" className="w-full" />
          {/* income chat */}
          <div className="h-[350px] md:w-[300px] md:h-[388px] px-5 pt-10 pb-0 bg-white absolute -bottom-24 rounded-xl shadow-[0_4px_32px_rgba(0,0,0,0.12)] left-10 md:left-6 lg:left-[48px]">
            <div className="mb-[70px] flex justify-center items-center">
              <CircleChat />
            </div>
            <div className="absolute bottom-10 md:bottom-10 md:text-xl font-Manrope mt-[22px]">
              <div className="flex col-span-2  items-center gap-2">
                <div className="w-[5px] h-[5px] bg-[#0DBBFC] rounded-full"></div>
                <div>
                  <p>35% - Agile Development</p>
                </div>
              </div>
              <div className="flex col-span-2  items-center gap-2">
                <div className="w-[5px] h-[5px] bg-[#69E6A6] rounded-full"></div>
                <div>
                  <p>30% - Investor bandwidth</p>
                </div>
              </div>
              <div className="flex col-span-2 items-center gap-2">
                <div className="w-[5px] h-[5px] bg-[#C4C4C4] rounded-full"></div>
                <div>
                  <p>35% - A/B testing </p>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default ServiceAnalysis;
