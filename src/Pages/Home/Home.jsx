import FaqSection from "./Sections/FAQ";
import Services from "./Sections/Services";
import { CarouselWithContent } from "./Sections/Slider";
import TestimonialSlider from "./Sections/TestimonialSlider/TestimonialSlider";


const Home = () => {
      return (
            <div className="">
                  <CarouselWithContent></CarouselWithContent>
                  <Services></Services>
                  <TestimonialSlider></TestimonialSlider>
                  <FaqSection></FaqSection>
            </div>
      );
};

export default Home;