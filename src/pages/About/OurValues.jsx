import React from "react";
import img1 from "../../assets/values/value1.png";
import img2 from "../../assets/values/value2.png";
import img3 from "../../assets/values/value3.png";
import ValueCard from "./ValueCard";

const OurValues = () => {
  const values = [
    {
      id: 1,
      image: img1,
      title: "We are commited.",
      paragraph:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
    },
    {
      id: 2,
      image: img2,
      title: "We are responsible.",
      paragraph:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
    },
    {
      id: 3,
      image: img3,
      title: "We are responsible.",
      paragraph:
        "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
    },
  ];
  return (
    <section className="bg-[#0A2640] py-[123px] mb-[124px]">
      <article className="max-w-[800px] mx-auto mt-10 md:mb-[52px] p-2">
        <h3 className="text-xl leading-[32px] text-white">Our values</h3>
        <h2 className="text-3xl text-white md:text-4xl lg:text-[48px] lg:leading-[72px] mt-3 font-Manrope">
          Things in we believe
        </h2>
        <p className="text-xl text-[#F1F1F1] leading-[32px] mt-[30px]">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.
        </p>
      </article>
      <div>
        {values.map((value) => (
          <ValueCard key={value.id} value={value} />
        ))}
      </div>
    </section>
  );
};

export default OurValues;
