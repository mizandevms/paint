import React from "react";
import { FaArrowLeft, FaArrowRightLong } from "react-icons/fa6";

const CtaSection = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[100px] p-20 flex justify-between items-center gap-8">
      <img
        alt="options"
        src="/Images/person.png"
        className="w-64 h-64 object-contain"
      />
      <div className="flex-1 text-start">
        <h2 className="text-3xl font-bold font-segoueUIExtraBold">
          What our customers thought?
        </h2>
        <p className="mt-8 text-xl text-[#262626]">
          Euismod magna id purus eget nunc ligula suspendisse dui netus.
          Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis.{" "}
        </p>

        <p className="font-bold mt-4">Holly Davidson</p>
        <div className="flex justify-start items-center gap-4 mt-2">
          <FaArrowLeft className="" />
          <FaArrowRightLong className="text-primaryColor" />
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
