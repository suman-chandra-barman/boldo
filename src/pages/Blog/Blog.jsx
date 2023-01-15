import React from "react";
import CallToAction from "../Home/CallToAction/CallToAction";
import Navbar from "../Shared/Navbar";
import BlogHeader from "./BlogHeader";
import LatestNews from "./LatestNews";

const Blog = () => {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <LatestNews />
      <CallToAction />
    </>
  );
};

export default Blog;
