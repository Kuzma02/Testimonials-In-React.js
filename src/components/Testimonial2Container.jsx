import React from "react";
import Testimonial2 from "./Testimonial2";

const Testimonial2Container = () => {
  return (
    <section className="text-center">
      <h3 className="text-4xl mb-5 font-bold max-sm:text-3xl">Customer voice</h3>
      <p className="text-xl max-sm:text-lg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        facere!
      </p>
      <div className="custom-testimonial2-container py-20 flex justify-center mt-10 max-lg:flex-col max-lg:items-center max-lg:gap-y-5">
        <Testimonial2 />
        <Testimonial2 />
        <Testimonial2 />
      </div>
    </section>
  );
};

export default Testimonial2Container;
