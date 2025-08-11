import React from "react";
const footer = () => {
  return (
    <div className="max-w-6xl mx-auto pt-6 border-t border-[#2626261F] flex justify-between items-center text-[#262626] px-10">
      <div>Copyright © 2022 Lorem Ipsum.</div>
      <div className="flex justify-end items-center gap-4 divide-x-2 divide-[#262626]">
        <a href="/">Privacy Policy</a>
        <a href="/" className="pl-4">
          Terms and Conditions
        </a>
      </div>
    </div>
  );
};

export default footer;
