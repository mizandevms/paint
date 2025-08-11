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
    <div className="px-10 w-full py-16 flex justify-between items-center">
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <h3 className="text-primaryColor text-2xl font-bold uppercase">
          risus praesent vulputate.
        </h3>
        <h1 className="font-segoueUIExtraBold font-extrabold text-6xl">
          Cursus Integer
        </h1>
        <h1 className="font-segoueUIExtraBold font-extrabold text-6xl">
          Consequat{" "}
          <ReactTyped
            strings={["Tristique."]}
            typeSpeed={100}
            backSpeed={60}
            loop
          />
        </h1>
        <div className="mt-4 flex flex-wrap justify-start items-center gap-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="flex justify-start items-center gap-2 rounded-full bg-white px-4 py-2 w-max mb-2"
            >
              <MdCheckCircleOutline className="h-6 w-6 text-primaryColor" />
              <p className="font-semibold">{option}</p>
            </div>
          ))}
        </div>
        <div className=" flex justify-end items-center gap-6 bg-primaryColor font-bold px-12 py-4 rounded-full mt-8">
          <p>Lorem Ipsum</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="w-full">fdsafsa</div>
    </div>
  );
};

export default HeroSection;
