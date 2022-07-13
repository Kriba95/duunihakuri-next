import React from "react";

function HeroHakuvahti() {
  return (
    <div className="container mt-6 mb-6  px-4 mx-auto">
    <div className="flex justify-center items-center flex-col  text-center font-bold lg:text-8xl text-6xl space-y-2">
      <h3 className="text-gray-900 pb-10">
        On välillä <span className="text-blue-500">haastavaa</span> löytää oikea 
        <span className="text-blue-400"> työpaikka</span>.
      </h3>
      <div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
        <h4 className="text-center">Luo Hakuvahti<span className="text-blue-400">.</span> </h4>
      </div>
    </div></div>
  );
}

export default HeroHakuvahti;
