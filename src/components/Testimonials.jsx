import Testimonial1 from "./Testimonial1"
import Testimonial2 from "./Testimonial2"
import Testimonial2Container from "./Testimonial2Container"


const Testimonials = () => {
  return (
    <main className="bg-white dark:bg-black">
      <h1 className="text-5xl text-center my-10 max-md:text-3xl">Testiomonial Components In React.js</h1>
        <h3 className="text-4xl text-center my-20">Testimonial v1 Single</h3>
        <Testimonial1 />
        <h3 className="text-4xl text-center my-20">Testimonial v1 Grouped</h3>
        <div className="flex gap-x-2 max-2xl:flex-col">
          <Testimonial1 />
          <Testimonial1 />
          <Testimonial1 />
        </div>

        {/* Testiominal v2 */}
        <h3 className="text-4xl text-center my-20">Testimonial v2 Grouped</h3>
        <Testimonial2Container />
    </main>
  )
}

export default Testimonials