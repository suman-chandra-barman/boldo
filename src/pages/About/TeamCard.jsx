import React from "react";

const TeamCard = ({ team }) => {
  const { name, image, title } = team;
  return (
    <div className="w-full mb-10 md:mt-0">
      <figure>
        <img src={image} alt="service" className="w-full" />
      </figure>
      <div className="mt-6">
        <h2 className="text-[28px] leading-[48px] font-Manrope md:mb-3">
          {name}
        </h2>
        <p className="text-xl leading-[32px] text-[#777777]">{title}</p>
      </div>
    </div>
  );
};

export default TeamCard;
