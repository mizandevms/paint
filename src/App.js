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
          <div
            className="w-full relative "
            // style={{
            //   backgroundImage: `url('/Images/bg1.png')`,
            //   backgroundSize: "contain",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            // }}
          >
            {/* <img
              alt="logo"
              src="/Images/bg1.png"
              className="absolute h-1/2 w-full object-contain"
            /> */}
            <div className="relative z-10">
              <OptionSection />
              <CtaSection />
              <Testimonial />
            </div>
          </div>

          <div className="max-w-6xl mx-auto w-full flex justify-between items-center px-10 py-16">
            <div className="flex-1 text-start text-4xl font-segoueUIExtraBold font-extrabold">
              <p>Vulputate et pulvinar ethre </p>
              <p>Suspendisse tellus consecteur </p>
            </div>
            <div className=" flex justify-end items-center gap-6 bg-primaryColor font-bold px-12 py-4 rounded-full">
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
