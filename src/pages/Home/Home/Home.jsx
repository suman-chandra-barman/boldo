import React from "react";
import CallToAction from "../CallToAction/CallToAction";
import FAQ from "../FAQ/FAQ";
import Header from "../Header/Header";
import OurBlog from "../OurBlog/OurBlog";
import OurServices from "../OurService/OurServices";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <Header />
      <OurServices />
      <Testimonial />
      <FAQ />
      <OurBlog />
      <CallToAction />
    </main>
  );
};

export default Home;
