import React from "react";
import banner1 from "../../assets/blog/banner/blog1.png";
import banner2 from "../../assets/blog/banner/blog2.png";
import banner3 from "../../assets/blog/banner/blog3.png";
import banner4 from "../../assets/services/menWithPhone.png";
import banner5 from "../../assets/FAQ/FAQ.png";
import banner6 from "../../assets/services/service2.png";
import user1 from "../../assets/blog/user/user1.png";
import user2 from "../../assets/blog/user/user2.png";
import user3 from "../../assets/blog/user/user3.png";
import BlogCart from "../Home/OurBlog/BlogCart";

const LatestNews = () => {
  const news = [
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
    {
      id: 4,
      user_name: "Chandler Bing",
      user_img: user1,
      category: "Category",
      date: "November 22, 2021",
      banner_img: banner4,
      describe: "Pitch termsheet backing validation focus release.",
    },
    {
      id: 5,
      user_name: "Rachel Green",
      user_img: user2,
      category: "Category",
      date: "November 22, 2021",
      banner_img: banner5,
      describe:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    },
    {
      id: 6,
      user_name: "Monica Geller",
      user_img: user3,
      category: "Category",
      date: "November 22, 2021",
      banner_img: banner6,
      describe:
        "Beta prototype sales iPad gen-z marketing network effects value proposition",
    },
  ];
  return (
    <section className="max-w-[1100px] mx-auto mb-[124px] mt-[96px]">
      <div>
        <h2 className="text-[48px] font-Manrope leading-[72px] mb-10">
          Latest news
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[100px] mt-[78px] justify-center">
          {news.map((blog) => (
            <BlogCart key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="text-center mt-[84px]">
          <button className="btn text-xl font-bold btn-outline border-black items-center bg-white rounded-[56px] px-[56px] h-[60px] py-4 hover:bg-[#69E6A6] text-[#0A2640] hover:border-[#69E6A6]">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
