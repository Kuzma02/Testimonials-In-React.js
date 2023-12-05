import React from "react";
import { FaStar } from "react-icons/fa6";
import TestimonialImage2 from "../assets/testimonials-2.png";

const Testimonial2 = () => {
  return (
    <div className="custom-testimonial2 bg-white flex flex-col gap-y-10 py-5 justify-center items-center rounded-xl mx-5 px-5">
      <div className="stars flex text-2xl mt-10">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
      </div>
      <p className="font-semibold text-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
        nostrum, laudantium nihil tenetur rerum voluptatum officia consectetur
        inventore quaerat repellat?
      </p>
      <div className="flex items-center">
        <img className="w-20 rounded-full" src={TestimonialImage2} alt="" />
        <div className="text-left ml-5">
          <p className="font-bold">Mark Giru</p>
          <p>Manager at Microsoft</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial2;
