import React from "react";

const ValueCard = ({ value }) => {
  const { image, title, paragraph } = value;
  return (
    <div className="md:flex gap-10 max-w-[800px] mx-auto mt-[72px] px-2 md:px-0">
      <div className="md:w-[285px] md:h-[151px]">
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="mt-5 md:mt-0">
        <h3 className="text-white font-Manrope text-[28px] leading-[48px]">
          {title}
        </h3>
        <p className="text-xl leading-[32px] mt-4 text-[#F1F1F1]">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
