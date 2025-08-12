import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdCheckCircleOutline } from "react-icons/md";

const Testimonial = () => {
  const options = [
    "Ac viverra sed risus praesent vulputate. ",
    "Natoqu consectetur pulvinar. ",
    "Sollicitudin ornare tempus nulla varius pulvinar.",
    "Varius pulvinar",
    "Natoque id tellus consectetur",
    "Vulputate et vulputate suspendisse",
  ];
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 w-full py-16 flex flex-col md:flex-row  justify-between items-center">
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <h1 className="font-segoueUIExtraBold font-extrabold text-2xl md:text-4xl">
          Cursus Integer
        </h1>
        <h1 className="font-segoueUIExtraBold font-extrabold text-2xl md:text-4xl">
          Consequat Tristique.
        </h1>
        <div className="mt-4 flex flex-wrap justify-start items-center md:gap-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-2 rounded-full bg-white px-4 py-2 w-max mb-2"
            >
              <MdCheckCircleOutline className="h-6 w-6 text-primaryColor" />
              <p className="font-semibold text-xs md:text-base">{option}</p>
            </div>
          ))}
        </div>
        <div className=" flex justify-end items-center gap-6 bg-black text-white text-sm md:text-base font-bold px-8 md:px-12 py-2 md:py-4 rounded-full mt-4 md:mt-8">
          <p>Lorem Ipsum</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="w-full">
        <img
          alt="options"
          src="/Images/testimonialBg.png"
          className="w-auto h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Testimonial;
