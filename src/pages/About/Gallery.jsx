import React from "react";
import img1 from "../../assets/gallery/1.1.png";
import img2 from "../../assets/gallery/2.png";
import img3 from "../../assets/gallery/3.3.png";
import img4 from "../../assets/gallery/4.png";
import img5 from "../../assets/gallery/5.png";

const Gallery = () => {
  return (
    <section className="relative top-[-100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 max-w-[1100px] mx-auto ">
        <figure>
          <img src={img1} alt="" className="w-full h-full" />
        </figure>

        <figure className="row-span-2">
          <img src={img2} alt="" className="h-full w-full" />
        </figure>
        <figure>
          <img src={img3} alt="" className="w-full h-full" />
        </figure>
        <figure>
          <img src={img4} alt="" className="w-full h-full" />
        </figure>
        <figure>
          <img src={img5} alt="" className="w-full h-full" />
        </figure>
      </div>
    </section>
  );
};

export default Gallery;
