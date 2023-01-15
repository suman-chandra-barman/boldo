import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../../assets/testimonial/testimonial1.png";
import img2 from "../../../assets/testimonial/testimonial2.png";
import img3 from "../../../assets/testimonial/testimonial3.png";
import TestimonialCard from "./TestimonialCard";
import ArrowButton from "./ArrowButon";

const TestimonialCarousel = () => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <ArrowButton />,
    prevArrow: <ArrowButton />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // testimonials Data
  const testimonialsData = [
    {
      id: 1,
      description:
        " “Buyer buzz partner network disruptive non-disclosure agreement business” ",
      use_name: "Albus Dumbledore",
      use_title: "Manager @ Howarts",
      use_image: img1,
    },
    {
      id: 2,
      description:
        " “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.” ",
      use_name: "Severus Snape",
      use_title: "Manager @ Slytherin",
      use_image: img2,
    },
    {
      id: 3,
      description:
        " “Release facebook responsive web design business model canvas seed money monetization.” ",
      use_name: "Harry Potter",
      use_title: "Team Leader @ Gryffindor",
      use_image: img3,
    },
    {
      id: 4,
      description:
        " “Buyer buzz partner network disruptive non-disclosure agreement business” ",
      use_name: "Albus Dumbledore",
      use_title: "Manager @ Howarts",
      use_image: img1,
    },
    {
      id: 5,
      description:
        " “Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.” ",
      use_name: "Severus Snape",
      use_title: "Manager @ Slytherin",
      use_image: img2,
    },
    {
      id: 6,
      description:
        " “Release facebook responsive web design business model canvas seed money monetization.” ",
      use_name: "Harry Potter",
      use_title: "Team Leader @ Gryffindor",
      use_image: img3,
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
