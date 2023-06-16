import React from "react";

const Footer = () => {
  return (
    <>
    <hr className="border-gray-800 my-2" />
        <div className="text-center text-white-500 bg-gray-500 mt-0 h-[50%]">
          &copy; {new Date().getFullYear()} DoubtFree. All rights reserved.
    </div>
    </>
  );
};

export default Footer;
