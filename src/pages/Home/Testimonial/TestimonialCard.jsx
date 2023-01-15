import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { description, use_name, use_title, use_image } = testimonial;
  return (
    <div className="md:max-w-[300px] mx-1  p-[30px] bg-white text-black rounded-xl shadow-[0_12px_32px_rgba(0, 0, 0, 0.12)]">
      <div>
        <p className="text-2xl leading-[36px] mb-[30px]">{description}</p>
      </div>
      <div className="flex items-center gap-4 mt-7">
        <div className="avatar">
          <div className="w-[58px] rounded-full">
            <img src={use_image} alt="User_image" />
          </div>
        </div>
        <div className="text-[#0A2640]">
          <p className="font-bold ">{use_name}</p>
          <p className="text-sm">{use_title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
