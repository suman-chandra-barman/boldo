import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonial = () => {
  return (
    <section className="bg-[#0A2640] px-3">
      <div className="max-w-[1100px] mx-auto text-white pb-5 md:pb-10 lg:pb-[96px]">
        <h3 className="md:px-0 text-2xl md:text-3xl lg:text-5xl md:leading-[72px] font-Manrope max-w-[716px] pt-[96px] mb-[72px]">
          An enterprise template to ramp up your company website
        </h3>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
