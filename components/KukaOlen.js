import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { LoginContext } from "../context/loginstate";
import { useRouter } from "next/router";

export const KukaOlen = () => {
  const { setProfile } = useContext(LoginContext);
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    await setProfile({ emp: 2 });
    router.push("/yritys/tyo");

  };

  const submitHandlers = async (event) => {
    event.preventDefault();
    await setProfile({ emp: 1 });
    router.push("/oma-profiili/");
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Uusi käyttäjä
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Valitse</span>
          </span>{" "}
          sopiva profiili{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-2 sm:mx-auto lg:max-w-full">
        <button onClick={submitHandlers}>
          <div className="hover:bg-blue-600 px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              20 Nov 2021
            </p>
            <span
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Työntekijä"
            >
              Työntekijä
            </span>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              Jos olet työnhakija, valitse tämä. Työntekijänä voit lisätä CVn ja
              lisätä hakuvahteja sopivaan alaan.
            </p>
            <span
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Valitse
            </span>
          </div>
        </button>

        <button onClick={submitHandler}>
          <div className="hover:bg-blue-600 px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              20 Nov 2020
            </p>
            <span
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
              aria-label="Read article"
              title="Työnantaja"
            >
              Työnantaja
            </span>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              Jos sinulla on yritys tai toiminimi voit luoda uusia työpaikka
              ilmoituksia.
            </p>
            <span
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Valitse
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
