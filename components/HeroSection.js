import React from "react";

function HeroSection() {
  return (
    <div className="container mt-6 mb-6  px-4 mx-auto">
    <div className="flex justify-center items-center flex-col  text-center font-bold lg:text-8xl text-6xl space-y-2">
      <h3 className="text-gray-900 pb-10">
        Nopeampi tapa   <span className="text-blue-500">löytää</span> uusia 
        <span className="text-blue-400"> työpaikkoja</span>.
      </h3>
      <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
      <h4 className="text-center">Katso lisää<span className="text-blue-400">!</span> </h4>
      </div>
    </div></div>
  );
}

export default HeroSection;
