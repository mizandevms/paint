import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdCheckCircleOutline } from "react-icons/md";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const options = [
    "Cursus Integer",
    "Integer Consequat ",
    "Tellus Euismod Pellentesque",
    "Aliquot Tristique",
    "Pellentesque Tempus",
    "Mauris Fermentum Praesent",
  ];
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 w-full md:py-16 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="w-full flex flex-col justify-start items-start sm:gap-2">
        <h3 className="text-primaryColor text-sm md:text-xl font-bold uppercase">
          risus praesent vulputate.
        </h3>
        <h1 className="font-segoueUIExtraBold font-extrabold text-2xl md:text-5xl">
          Cursus Integer
        </h1>
        <h1 className="font-segoueUIExtraBold font-extrabold text-2xl md:text-5xl">
          Consequat{" "}
          <ReactTyped
            strings={["Tristique."]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </h1>
        <div className="flex flex-wrap justify-start items-center gap-1 md:gap-3 mt-4 md:mt-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-2 rounded-full bg-white px-4 py-2 w-max mb-2"
            >
              <MdCheckCircleOutline className="md:h-6  md:w-6 text-primaryColor" />
              <p className="font-semibold text-xs md:text-base">{option}</p>
            </div>
          ))}
        </div>
        <div className=" flex justify-end items-center gap-6 bg-primaryColor text-sm md:text-base font-bold px-8 md:px-12 py-2 md:py-4 rounded-full mt-4 md:mt-8">
          <p>Lorem Ipsum</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="w-full">
        {" "}
        <img
          alt="options"
          src="/Images/HeroBg.png"
          className="w-auto h-full object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
