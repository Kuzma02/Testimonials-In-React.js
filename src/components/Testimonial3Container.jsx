import React from "react";
import Testimonial3 from "./Testimonial3";

const Testimonial3Container = () => {
  return (
    <section className="text-center">
      <h3 className="text-4xl mb-5 font-bold max-sm:text-3xl">
        Customer voice
      </h3>
      <p className="text-xl max-sm:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        facere! 
      </p>
    <div className="custom-testimonial-container flex justify-center items-center">
        <div className="custom-testimonial-content-container flex bg-white rounded-xl max-md:flex-col max-md:max-w-2xl max-md:mx-10">
            <Testimonial3 />
            <Testimonial3 />
        </div>
    </div>

    </section>
  );
};

export default Testimonial3Container;
