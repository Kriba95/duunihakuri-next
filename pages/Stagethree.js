import React from "react";
import Link from "next/link"

const Stagethree = ({ state, setPage, setStage }) => (
  <>
    <div className="lg:ml-64 mt-20 lg:mr-64 sm:ml-32 sm:mr-32">
      <div className="w-full mb-60 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="mb-4">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Melkein valmista
            </h2>
            <p className="text-base text-gray-700 md:text-lg sm:px-4">
              Enään sinun tarvitsee vain julkaista. 
            </p>
            <p>Julkaisemalla hyväksyt <Link href="/terms-conditions"><a><b>käyttäjäehdot</b>.</a></Link></p>
            <hr className="w-full my-8 border-gray-300" />
          </div>
          <div className="right-9  md:ml-64 md:mr-64">
            <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
            <button
        onClick={() => (setPage(4), setStage(4))}
        className="mb-2 md:mb-0 bg-blue-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
      >
        Julkaise!
      </button>
                     
            </div>
          </div>
        </div>
      </div>
    </div>


<div className="right-9  md:ml-64 md:mr-64">
    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  

    
                     
                        </div>
  
     
    </div>
    <br />
    <br />
 
  </>
);

export default Stagethree;
