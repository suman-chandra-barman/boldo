import React from "react";
import img1 from "../../assets/blog/header/1.png";
import user1 from "../../assets/blog/user/user1.png";
const BlogHeader = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="text-center text-[#0A2640] mt-[42px]">
        <h3 className="text-xl ">Blog</h3>
        <h2 className="text-2xl lg:text-[64px] leading-10 lg:leading-[84px]">
          Thoughts and words
        </h2>
      </div>
      <div className="md:flex gap-5 lg:gap-[100px] mt-5 md:mt-[67px] border-b border-b-[#0A2640npm] pb-[72px]">
        <div className="md:w-1/2">
          <img src={img1} alt="header" className="w-full" />
        </div>
        <div className="mt-5 md:mt-0 md:w-1/2 flex justify-center items-center">
          <div>
            <div className="flex gap-3">
              <h3 className="mb-[2px] text-[#0A2640] text-bold">Category</h3>
              <p className="text-[#777777]">November 22, 2021</p>
            </div>
            <p className="text-2xl lg:text-[48px] leading-10 lg:leading-[72px] mt-3">
              Pitch termsheet backing validation focus release.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="avatar">
                <div className="w-8 rounded-full">
                  <img src={user1} alt="User_image" />
                </div>
              </div>
              <div>
                <p>Chandler Bing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
