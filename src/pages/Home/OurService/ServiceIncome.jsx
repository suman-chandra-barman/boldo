import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import men from "../../../assets/services/menWithPhone.png";

const ServiceIncome = () => {
  return (
    <section>
      <div className="md:flex gap-[120px] justify-center">
        <figure className="md:w-1/2 rounded-[24px] relative">
          <img src={men} alt="men with phone" className="w-full" />
          {/* income chat */}
          <div className="w-[250px] h-[388px] p-10 pb-0 bg-white absolute -bottom-24 rounded-xl shadow-[0_4px_32px_rgba(0,0,0,0.12)] right-[57px]">
            <div className="flex gap-3 mb-[70px] relative top-48">
              <div className="w-3 bg-[#0DBBFC] h-[50px] absolute -bottom-12 left-0"></div>
              <div className="w-3 bg-[#0DBBFC] h-[29px] absolute -bottom-7 left-6"></div>
              <div className="w-3 bg-[#0DBBFC] h-[134px] absolute bottom-0 left-[48px]"></div>
              <div className="w-3 bg-[#0DBBFC] h-[93px] absolute bottom-0 left-[72px]"></div>
              <div className="w-3 bg-[#0A2640] h-[178px] absolute bottom-0 left-[96px]"></div>
              <div className="w-3 bg-[#0DBBFC] h-[126px] absolute bottom-0 left-[120px]"></div>
              <div className="w-3 bg-[#0DBBFC] h-[150px] absolute bottom-0 left-[144px]"></div>
              <div className="w-3 bg-[#0DBBFC] h-[79px] absolute bottom-0 left-[168px]"></div>
            </div>
            <div className="absolute bottom-10">
              <h6 className="text-2xl  text-[#0A2640]">30%</h6>
              <p className="text-[14px] text-[#0A2640]">More income in June</p>
            </div>
          </div>
        </figure>
        <article className="mt-28 md:w-1/2 md:mt-16">
          <h3 className=" text-2xl md:text-4xl font-Manrope">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className="flex gap-[25px] mt-[40px]">
            <FaCheckCircle className="text-4xl" />
            <p className="text-xl">We connect our customers with the best.</p>
          </div>
          <div className="flex gap-[25px] my-[25px]">
            <FaCheckCircle className="text-4xl" />
            <p className="text-xl">Advisor success customer launch party.</p>
          </div>
          <div className="flex gap-[25px]">
            <FaCheckCircle className="text-4xl" />
            <p className="text-xl">Business-to-consumer long tail.</p>
          </div>
          <button
            type="button"
            className="btn mt-[55px] bg-[#0A2640] hover:bg-[#69E6A6] hover:text-[#0A2640] rounded-[50px] py-4 px-14"
          >
            Start now
          </button>
        </article>
      </div>
    </section>
  );
};

export default ServiceIncome;
