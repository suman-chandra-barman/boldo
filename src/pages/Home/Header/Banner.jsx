import React from "react";
import img1 from "../../../assets/banner/prograss.png";
import img2 from "../../../assets/banner/chat.png";
import img3 from "../../../assets/banner/circuleChat.png";
const Banner = () => {
  return (
    <>
      <div className="md:flex px-3 relative mt-5 md:mt-[65px] md:gap-[30px] lg:gap-[110px] z-[1]">
        <div className="md:w-1/2 px-2 md:px-0">
          <h1 className="font-Manrope text-3xl lg:text-5xl leading-10 lg:leading-[72px]">
            Save time by building fast with Boldo Template{" "}
          </h1>
          <p className="text-[#F1F1F1] leading-[28px] mt-4">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="mt-5 lg:mt-10">
            <button className="btn bg-[#69E6A6] text-[#0A2640] rounded-3xl px-2 md:px-5 lg:px-10 py-2 hover:bg-white">
              Buy template
            </button>
            <button className="btn btn-outline border-white ml-2 lg:ml-5 text-white rounded-3xl px-2 md:px-5 lg:px-10 py-2 hover:bg-[#69E6A6] hover:text-[#0A2640]">
              Buy template
            </button>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-[495px] mt-5 md:mt-0 px-3 md:px-0">
          <figure>
            <img src={img1} alt="" className="w-full" />
            <div className="flex justify-between gap-4 mt-4">
              <div className="w-1/2 md:w-[192px] md:h-[165px] bg-[#FFFFFF2E] flex justify-center items-center rounded-[15px]">
                <img
                  src={img2}
                  alt=""
                  className="w-[100px] md:w-[140px] md:h-[106px]"
                />
              </div>

              <img src={img3} alt="" className="w-1/2 " />
            </div>
          </figure>
        </div>
      </div>
      <div className="w-[1293px] h-[1293px] bg-[#1C3D5B] rounded-full absolute top-[-767px] right-[-665px] z-[-1]"></div>
    </>
  );
};

export default Banner;
