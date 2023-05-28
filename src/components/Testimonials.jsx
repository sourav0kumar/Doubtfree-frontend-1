import React from "react";
import { Avatar } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      review: "The course was amazing! I learned so much and the instructor was really knowledgeable.",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
    {
      name: "Jane Smith",
      review: "I highly recommend this course to anyone who wants to learn the subject. It's worth every penny!",
      avatarUrl: "https://example.com/avatar2.jpg",
    },
    {
      name: "Michael Johnson",
      review: "The course materials were well-organized and easy to follow. I'm glad I took this course.",
      avatarUrl: "https://example.com/avatar3.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Student Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center justify-center bg-white h-64 p-8">
              <Avatar size={64} src={testimonial.avatarUrl} className="mb-4" />
              <p className="text-lg text-center mb-4">{testimonial.review}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
