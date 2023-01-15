import React from "react";

const CallToAction = () => {
  return (
    <section className="max-w-[1200px] bg-[#0A2640] px-3 py-[72px] mx-auto text-white md:rounded-xl relative z-[1] overflow-hidden">
      <div className="md:w-[715px] mx-auto">
        <h4 className="text-3xl md:text-[48px] text-center">
          An enterprise template to ramp up your company website
        </h4>
        <form className="mt-[50px] md:flex justify-center gap-6 text-center">
          <input
            type="email"
            placeholder="Your email address"
            className="md:text-xl px-3 md:px-8 py-2 md:py-3 rounded-[256px] lg:w-[370px] "
          />
          <button className="bg-[#69E6A6] font-bold mt-2 md:mt-0 md:text-xl text-[#0A2640] rounded-[56px] px-4 md:px-7 lg:px-[56px] py-2 md:py-4 hover:bg-white">
            Start now
          </button>
        </form>
      </div>
      <div className="w-[1293px] h-[1293px] bg-[#1C3D5B] rounded-full absolute top-[-1031px] right-[-605px] z-[-1]"></div>
    </section>
  );
};

export default CallToAction;
