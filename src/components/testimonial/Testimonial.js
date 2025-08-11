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
    <div className="max-w-6xl mx-auto px-10 w-full py-16 flex justify-between items-center">
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <h1 className="font-segoueUIExtraBold font-extrabold text-4xl">
          Cursus Integer
        </h1>
        <h1 className="font-segoueUIExtraBold font-extrabold text-4xl">
          Consequat Tristique.
        </h1>
        <div className="mt-4 flex flex-wrap justify-start items-center gap-2">
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
        <div className=" flex justify-end items-center gap-6 bg-black text-white font-bold px-12 py-4 rounded-full mt-8">
          <p>Lorem Ipsum</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="w-full">Image will be here</div>
    </div>
  );
};

export default Testimonial;
