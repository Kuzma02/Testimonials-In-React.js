import TestimonialImage3 from "../assets/testimonials-3.png";

const Testimonial3 = () => {
  return (
    <div className="px-10 py-10">
      <p className="text-lg font-light max-sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere neque
        veniam, voluptas recusandae explicabo eius nesciunt maiores saepe
        voluptatem iure! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Rem, sit aliquid perferendis quos doloribus atque voluptatem
        reiciendis quae omnis exercitationem.
      </p>
      <div className="flex items-center">
        <img src={TestimonialImage3} alt="" className="w-24 rounded-full max-sm:w-10" />
        <div className="text-left ml-2">
          <p className="font-bold max-sm:text-sm">Michael Harden</p>
          <p className="font-light max-sm:text-sm">Manager at Google</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial3;
