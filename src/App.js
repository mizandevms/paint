import "./App.css";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import OptionSection from "./components/options/Options";
import CtaSection from "./components/ctaSection/CtaSection";
import Testimonial from "./components/testimonial/Testimonial";
import { IoArrowForwardSharp } from "react-icons/io5";

function App() {
  return (
    <div className="App bg-backgroundColor h-full w-full min-w-screen min-h-screen py-10 font-segoueUIThin">
      <div className=" space-y-10">
        <Header />
        {/* main layout */}
        <>
          <HeroSection />
          <div className="w-full relative h-full overflow-hidden">
            <div className="w-full md:h-[2300px] overflow-hidden py-10  relative z-0">
              <div className="w-[200%] h-[1500px] md:h-[1000px] bg-black -rotate-6 relative -left-20"></div>
              <div className="w-[200%] h-[1500px] md:h-[1000px] bg-primaryColor -rotate-6 relative -left-20"></div>
            </div>

            <div className="absolute inset-x-0 top-32 md:top-52 z-10">
              <OptionSection />
              <CtaSection />
              <Testimonial />
            </div>
          </div>

          <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center px-5 md:px-10  md:py-16">
            <div className="flex-1 text-start text-2xl md:text-4xl font-segoueUIExtraBold font-extrabold">
              <p>Vulputate et pulvinar ethre </p>
              <p>Suspendisse tellus consecteur </p>
            </div>
            <div className=" flex justify-end items-center gap-6 bg-primaryColor text-sm md:text-base font-bold px-8 md:px-12 py-2 md:py-4 rounded-full mt-8 md:mt-0">
              <p>Lorem Ipsum</p>
              <IoArrowForwardSharp />
            </div>
          </div>
        </>
        <Footer />
      </div>
    </div>
  );
}

export default App;
