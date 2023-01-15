import React from "react";

const BlogCart = ({ blog }) => {
  const { id, user_name, user_img, category, date, banner_img, describe } =
    blog;
  return (
    <div className="w-full h-[424px] relative">
      <figure>
        <img src={banner_img} alt="Banner" className="w-full h-[209px]" />
      </figure>
      <div className="mt-6">
        <div className="flex gap-3">
          <h3 className="mb-[2px] text-[#0A2640] text-bold">{category}</h3>
          <p className="text-[#777777]">{date}</p>
        </div>
        <p className="text-xl mt-3">{describe}</p>
        <div className="flex md:absolute bottom-0 items-center gap-3 mt-7">
          <div className="avatar">
            <div className="w-8 rounded-full">
              <img src={user_img} alt="User_image" />
            </div>
          </div>
          <div>
            <p>{user_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
