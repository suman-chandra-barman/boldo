import React from "react";
import user1 from "../../../assets/blog/user/user1.png";
import user2 from "../../../assets/blog/user/user2.png";
import user3 from "../../../assets/blog/user/user3.png";
import banner1 from "../../../assets/blog/banner/blog1.png";
import banner2 from "../../../assets/blog/banner/blog2.png";
import banner3 from "../../../assets/blog/banner/blog3.png";
import BlogCart from "./BlogCart";

const OurBlog = () => {
  const blogs = [
    {
      id: 1,
      user_name: "Chandler Bing",
      user_img: user1,
      category: "Category",
      date: "November 22, 2021",
      banner_img: banner1,
      describe: "Pitch termsheet backing validation focus release.",
    },
    {
      id: 2,
      user_name: "Rachel Green",
      user_img: user2,
      category: "Category",
      date: "November 22, 2021",
      banner_img: banner2,
      describe:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    },
    {
      id: 3,
      user_name: "Monica Geller",
      user_img: user3,
      category: "Category",
      date: "November 22, 2021",
      banner_img: banner3,
      describe:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
    },
  ];
  return (
    <section className="max-w-[1100px] mx-auto mb-12 md:mb-[100px] lg:mb-[124px] mt-12 md:mt-[100px] lg:mt-[156px]">
      <div className="text-center md:w-[90%] lg:w-[80%] mx-auto">
        <h2 className="text-xl text-[#777777]">Our Blog</h2>
        <p className="text-2xl md:text-3xl lg:text-5xl md:leading-[72px] mt-3 font-Manrope">
          Value proposition accelerator product management venture
        </p>
      </div>
      <div>
        <div className="md:flex col-span-2 gap-[100px] mt-[78px] justify-center">
          {blogs.map((blog) => (
            <BlogCart key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="text-center mt-5 md:mt-10 lg:mt-[84px]">
          <button className="btn text-xl font-bold btn-outline border-black items-center bg-white rounded-[56px] px-[56px] h-[60px] py-4 hover:bg-[#69E6A6] text-[#0A2640] hover:border-[#69E6A6]">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
