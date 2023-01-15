import React from "react";
import faq from "../../../assets/FAQ/FAQ.png";

const FAQ = () => {
  return (
    <section className="max-w-[1100px] mx-auto mt-[124px]">
      <figure>
        <img src={faq} alt="Banner" />
      </figure>
      <div className="mt-[56px] md:flex gap-[100px]">
        <p className="font-Manrope text-2xl md:text-[36px] md:w-1/2">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </p>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-b border-b-[#C4C4C4]"
          >
            <div className="collapse-title text-xl font-medium px-0">
              We connect our customers with the best?
            </div>
            <div className="collapse-content">
              <p>
                tabIndex={0} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
          <div tabIndex={1} className="collapse collapse-arrow">
            <div className="collapse-title text-xl font-medium">
              Android research & development rockstar?
            </div>
            <div className="collapse-content px-0 border-b border-b-[#C4C4C4]">
              <p>
                tabIndex={1} attribute is necessary to make the div focusable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
