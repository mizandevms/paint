import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const Options = () => {
  return (
    <div className="px-10 w-full py-16 flex justify-between items-center">
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <h3 className="text-primaryColor text-sm font-bold text-left">
          Quisque porttitor vitae vel amet neque scelerisque mattis. <br />{" "}
          Consectetur nibh velit magna consectetur leo.
        </h3>
        <h1 className="font-segoueUIExtraBold font-extrabold text-4xl">
          Cursus Integer Conseq
        </h1>
        <h1 className="font-segoueUIExtraBold font-extrabold text-4xl">
          Aliquam Tristique.
        </h1>

        <div className=" flex justify-end items-center gap-6 bg-white font-bold px-12 py-4 rounded-full mt-8">
          <p>Lorem Ipsum</p>
          <IoArrowForwardSharp />
        </div>
      </div>
      <div className="w-full flex justify-between  gap-8">
        <div className="w-full space-y-8">
          <div className="w-full bg-white p-8 rounded-3xl space-y-4">
            <img
              alt="options"
              src="/Images/icons/1.png"
              className="w-auto h-10 object-contain"
            />

            <div className="flex justify-start items-baseline gap-2">
              <p className="font-segoueUIExtraBold font-extrabold text-5xl">
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
              <p className="font-segoueUIExtraBold font-extrabold text-5xl">
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
        <div className="w-full space-y-8 ">
          <div className="w-full bg-primaryColor p-8 rounded-3xl space-y-4 mt-20">
            <img
              alt="options"
              src="/Images/icons/2.png"
              className="w-auto h-10 object-contain"
            />

            <div className="flex justify-start items-baseline gap-2">
              <p className="font-segoueUIExtraBold font-extrabold text-5xl">
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
              <p className="font-segoueUIExtraBold font-extrabold text-5xl">
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
