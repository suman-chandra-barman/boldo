import React from "react";
import faq from "../../../assets/FAQ/FAQ.png";

const FAQ = () => {
  return (
    <section className="max-w-[1100px] px-3 mx-auto mt-10 md:mt-[80px] lg:mt-[124px]">
      <figure>
        <img src={faq} alt="Banner" />
      </figure>
      <div className="mt-[56px] md:flex gap-[100px]">
        <p className="font-Manrope text-2xl md:text-[36px] md:w-1/2 leading-[32px] md:leading-[56px]">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-b border-b-[#C4C4C4]"
          >
            <div className="collapse-title md:text-xl font-medium px-0">
              We connect our customers with the best?
            </div>
            <div className="collapse-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos qui repellat unde et eos, blanditiis fugiat facere
                sed aliquid velit, ratione non. Voluptatibus sequi aspernatur
                eligendi odit perferendis repudiandae, explicabo corrupti
                voluptate, obcaecati fuga nihil reprehenderit id maiores labore
                quod laborum rem quam facere dolore ad, tenetur at vel velit?
              </p>
            </div>
          </div>
          <div tabIndex={1} className="collapse collapse-arrow">
            <div className="collapse-title md:text-xl font-medium px-0">
              Android research & development rockstar?
            </div>
            <div className="collapse-content px-0 border-b border-b-[#C4C4C4]">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                numquam doloremque cumque dolores, laboriosam, eum recusandae
                veniam ex quasi molestiae, reiciendis ducimus praesentium
                perspiciatis? Ex itaque iure quis cumque quisquam, totam
                consectetur voluptatem dolore consequatur nostrum doloribus
                aspernatur voluptas, ratione excepturi minima reiciendis
                consequuntur culpa, facere esse fuga! Praesentium, quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
