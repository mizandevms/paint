import React from "react";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";

const CtaSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10">
      <div className=" bg-white rounded-[50px] md:rounded-[100px] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <img
          alt="options"
          src="/Images/person.png"
          className="w-32 md:w-64 h-32 md:h-64 object-contain"
        />
        <div className="flex-1 text-start">
          <h2 className="text-xl md:text-3xl font-bold font-segoueUIExtraBold">
            What our customers thought?
          </h2>
          <p className="mt-4 md:mt-8 text-base md:text-xl text-[#262626]">
            Euismod magna id purus eget nunc ligula suspendisse dui netus.
            Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.{" "}
          </p>

          <p className="font-bold mt-4 text-sm md:text-base">Holly Davidson</p>
          <div className="flex justify-start items-center gap-4 mt-2">
            <FaArrowLeft className="" />
            <FaArrowRightLong className="text-primaryColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
