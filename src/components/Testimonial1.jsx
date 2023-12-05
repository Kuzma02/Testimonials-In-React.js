import TestimonialImage1 from "../assets/testimonials-1.png";

const Testimonial1 = () => {
  return (
    <>
      <div className="custom-testimonial1 border-black border-2 p-5 flex flex-row-reverse mx-auto bg-gray-100 mt-5 rounded-xl max-sm:flex-col max-sm:gap-y-10">
        <img
          src={TestimonialImage1}
          alt=""
          className="w-48 h-48 rounded-full"
        />
        <div className="flex flex-col justify-between">
          <p className="font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            libero alias cupiditate deserunt ipsum distinctio, animi eos
            ratione! Fuga, consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, autem.
          </p>
          <p className="mt-auto font-bold">Alexa Daniels</p>
          <p className="text-green-600 font-bold">Founder, xyz.com</p>
        </div>
      </div>
    </>
  );
};

export default Testimonial1;
