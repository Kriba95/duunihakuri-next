import React from "react";

const Stage = ({ stage, setPage, page }) => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="bfcc89c7-3b4a-491a-bc7e-53e26502ff69"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#bfcc89c7-3b4a-491a-bc7e-53e26502ff69)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">Jätä</span>
        </span>{" "}
        työpaikkailmoitus
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Jätä ilmainen työpaikkailmoitus Duunihakurille tämän lomakkeen avulla.
        Voit myös mainostaa kampanjaa jotta saat parhaamman näkyvyyden.
      </p>
    </div>

    <div className="grid gap-8 row-gap-8 grid-cols-3">
      {stage === 1 ? (
        <>
          <div onClick={() => setPage(1)} className="sm:text-center">
            <div
              className={
                page === 1
                  ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white sm:mx-auto"
                  : "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
              }
            >
              1
            </div>
            <h6 className="mb-2 font-semibold leading-5">Ilmoitus</h6>
          </div>

          <div className="sm:text-center">
            <div
              className={
                page === 2
                  ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white  sm:mx-auto"
                  : " flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
              }
            >
              2
            </div>
            <h6 className="mb-2 font-semibold leading-5">Mainosta</h6>
          </div>

          <div className="sm:text-center">
            <div
              className={
                page === 3
                  ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white  sm:mx-auto"
                  : "flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
              }
            >
              3
            </div>
            <h6 className="mb-2 font-semibold leading-5">Julkaise</h6>
          </div>
        </>
      ) : (
        <>
          {stage === 2 ? (
            <>
              <div onClick={() => setPage(1)} className="sm:text-center">
                <div
                  className={
                    page === 1
                      ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white sm:mx-auto"
                      : "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
                  }
                >
                  1
                </div>
                <h6 className="mb-2 font-semibold leading-5">Ilmoitus</h6>
              </div>

              <div onClick={() => setPage(2)} className="sm:text-center">
                <div
                  className={
                    page === 2
                      ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white  sm:mx-auto"
                      : "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
                  }
                >
                  2
                </div>
                <h6 className="mb-2 font-semibold leading-5">Mainosta</h6>
              </div>

              <div className="sm:text-center">
                <div
                  className={
                    page === 3
                      ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white  sm:mx-auto"
                      : "flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
                  }
                >
                  3
                </div>
                <h6 className="mb-2 font-semibold leading-5">Julkaise</h6>
              </div>
            </>
          ) : (
            <>
              <div onClick={() => setPage(1)} className="sm:text-center">
                <div
                  className={
                    page === 1
                      ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white sm:mx-auto"
                      : "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
                  }
                >
                  1
                </div>
                <h6 className="mb-2 font-semibold leading-5">Ilmoitus</h6>
              </div>

              <div onClick={() => setPage(2)} className="sm:text-center">
                <div
                  className={
                    page === 2
                      ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white  sm:mx-auto"
                      : "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
                  }
                >
                  2
                </div>
                <h6 className="mb-2 font-semibold leading-5">Mainosta</h6>
              </div>

              <div onClick={() => setPage(3)} className="sm:text-center">
                <div
                  className={
                    page === 3
                      ? "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-gray-900 text-white  sm:mx-auto"
                      : "cursor-pointer flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto"
                  }
                >
                  3
                </div>
                <h6 className="mb-2 font-semibold leading-5">Julkaise</h6>
              </div>
            </>
          )}
        </>
      )}
    </div>
  </div>
);

export default Stage;
