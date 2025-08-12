import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const Options = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 md:px-10 w-full py-16 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
      <div className="w-full flex flex-col justify-start items-start md:gap-2">
        <h3 className="text-primaryColor text-xs md:text-sm font-bold text-left">
          Quisque porttitor vitae vel amet neque scelerisque mattis. <br />{" "}
          Consectetur nibh velit magna consectetur leo.
        </h3>
        <h1 className="font-segoueUIExtraBold font-extrabold text-xl md:text-4xl text-white">
          Cursus Integer Conseq
        </h1>
        <h1 className="font-segoueUIExtraBold font-extrabold text-xl md:text-4xl text-white">
          Aliquam Tristique.
        </h1>

        <div className=" flex justify-end items-center gap-6 bg-white text-sm md:text-base font-bold px-8 md:px-12 py-2 md:py-4 rounded-full mt-4 md:mt-8">
          <p>Lorem Ipsum</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between gap-5 sm:gap-8">
        <div className="w-full space-y-4 md:space-y-8">
          <div className="w-full bg-white p-8 rounded-3xl space-y-4">
            <img
              alt="options"
              src="/Images/icons/1.png"
              className="w-auto h-10 object-contain"
            />

            <div className="flex justify-start items-baseline gap-2">
              <p className="font-segoueUIExtraBold font-extrabold text-3xl md:text-5xl">
                1
              </p>{" "}
              <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
            </div>
            <p className="text-start text-lg font-bold mt-4">Phasellus Vitae</p>
            <p className="flex flex-col justify-start items-start text-sm mt-4">
              <span className="font-semibold">Quisque</span>
              <span className="font-light text-[#262626]">
                Porttitor vitae vel amet{" "}
              </span>
            </p>
          </div>
          <div className="w-full bg-primaryColor p-8 rounded-3xl space-y-4">
            <img
              alt="options"
              src="/Images/icons/3.png"
              className="w-auto h-10 object-contain"
            />

            <div className="flex justify-start items-baseline gap-2">
              <p className="font-segoueUIExtraBold font-extrabold text-3xl md:text-5xl">
                3
              </p>{" "}
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
            <p className="text-start text-lg font-bold mt-4">
              Eleifend Pulvinar{" "}
            </p>
            <p className="flex flex-col justify-start items-start text-sm mt-4">
              <span className="font-semibold">Vitae</span>
              <span className="font-light text-[#262626]">
                Consectetur nibh velit{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full space-y-4 md:space-y-8 ">
          <div className="w-full bg-primaryColor p-8 rounded-3xl space-y-4 md:mt-20">
            <img
              alt="options"
              src="/Images/icons/2.png"
              className="w-auto h-10 object-contain"
            />

            <div className="flex justify-start items-baseline gap-2">
              <p className="font-segoueUIExtraBold font-extrabold text-3xl md:text-5xl">
                2
              </p>{" "}
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
            <p className="text-start text-lg font-bold mt-4">Iaculis Magna</p>
            <p className="flex flex-col justify-start items-start text-sm mt-4">
              <span className="font-semibold">Porttitor</span>
              <span className="font-light text-[#262626]">
                neque scelerisque mattis.
              </span>
            </p>
          </div>
          <div className="w-full bg-white p-8 rounded-3xl space-y-4">
            <img
              alt="options"
              src="/Images/icons/4.png"
              className="w-auto h-10 object-contain"
            />

            <div className="flex justify-start items-baseline gap-2">
              <p className="font-segoueUIExtraBold font-extrabold text-3xl md:text-5xl">
                4
              </p>{" "}
              <div className="h-2 w-2 rounded-full bg-primaryColor"></div>
            </div>
            <p className="text-start text-lg font-bold mt-4">Velit Odio Phir</p>
            <p className="flex flex-col justify-start items-start text-sm mt-4">
              <span className="font-semibold">Ametneq</span>
              <span className="font-light text-[#262626]">
                magna consectetur leo.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
