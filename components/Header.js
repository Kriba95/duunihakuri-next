import React, { useState, useContext } from "react";
import { Context } from "../context/state";
// import { div, div, div } from "react-bootstrap";
// import * as FaIcons from "react-icons/fa";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import { useRouter } from "next/router";

export const Header = () => {
  const [searchData, setSearchData] = useState({});

  const { handleSubmit } = useContext(Context);
  const router = useRouter();

  const handleChange = ({ target }) => {
    let value;
    if (target.value === "") {
      value = null;
    } else {
      value = target.value;
    }
    let data = searchData;
    data[target.name] = value;
    setSearchData(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    router.push("/ilmoitus/avoimet-tyopaikat/");

    await handleSubmit(searchData);
  };

  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-gray-200"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h1 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            Löydä Unelmiesi Työpaikka <br className="hidden md:block" />
            Etsi työpaikkoja ympäri Suomea
            <span className="relative inline-block">
              <div className="w-full h-3 -mt-3 bg-deep-purple-accent-400" />
            </span>
          </h1>
          <p className="mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg">
            Duunihakuri auttaa sinua löytämään uusia mahdollisuuksia – ehkäpä
            sellaisiakin, joita et itse olisi tullut ajatelleeksi? Aloita
            etsimällä kiinnostavia työpaikkoja hakusanojen tai sijainnin
            perusteella.
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder="Hae Työtehtävää"
              required
              type="text"
              name="ala"
              aria-label="Lisää Työtehtävä"
              onChange={handleChange}
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
            />
            <button
              onClick={submitHandler}
              type="submit"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Hae
            </button>
          </form>
          <p className="max-w-md mb-10 text-xs font-thin tracking-wide text-gray-500 sm:text-sm sm:mx-auto md:mb-16">
            Palvelussa yhteensä 7 482 työpaikkailmoitusta, 381 uutta
            työpaikkailmoitusta viikon aikana.
          </p>
        </div>
      </div>
    </div>
  );
};
