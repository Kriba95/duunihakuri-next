import React from "react";
import Head from "next/head";

function JataIlmoitus() {
  return (
    <>
      <Head>
        <title>Duunihakuri | Jätä Ilmoitus</title>
        <meta
          name="description"
          content="Duunihakuri | Löydä etsimäsi työpaikka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            Jätä ilmainen työpaikkailmoitus Duunihakurille tämän lomakkeen
            avulla. Voit myös mainostaa kampanjaa jotta saat parhaamman
            näkyvyyden.
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
              1
            </div>
            <h6 className="mb-2 font-semibold leading-5">Ilmoitus</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
              2
            </div>
            <h6 className="mb-2 font-semibold leading-5">Mainosta</h6>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold rounded-full text-deep-purple-accent-400 bg-indigo-50 sm:mx-auto">
              3
            </div>
            <h6 className="mb-2 font-semibold leading-5">Julkaise</h6>
          </div>
        </div>
      </div>

      <div className="lg:ml-64 lg:mr-64 sm:ml-32 sm:mr-32">
        <div className="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">
                  Ilmoituksen tiedot
                </h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
              </div>
              <div className="mt-5">
                <div className="form">
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Ilmoituksen otsikko <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Ilmoituksen postio"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="integration[shop_name]"
                        id="integration_shop_name"
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Työnantaja <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Yrityksen nimi"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="integration[shop_name]"
                        id="integration_shop_name"
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">
                      Yrityksen WWW-Osoite
                    </label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className=" font-semibold text-gray-600 py-2">
                      Hakulomakkeen WWW-Osoite tai puhelinnumero
                    </label>
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                      <div className="flex">
                        <span className="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Työkohteen tai yrityksen osoite
                      </label>
                      <input
                        placeholder="Osoite"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="integration[street_address]"
                        id="integration_street_address"
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Maa<abbr title="required">*</abbr>
                      </label>
                      <select
                        className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                        required="required"
                        name="integration[city_id]"
                        id="integration_city_id"
                      >
                        <option value>Suomi</option>
                        <option value>Ruotsi</option>
                        <option value>Viro</option>
                        <option value>muu</option>
                      </select>
                      <p
                        className="text-sm text-red-500 hidden mt-3"
                        id="error"
                      >
                        Täytä tämä kenttä
                      </p>
                    </div>
                  </div>

                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Viimeinen hakupäivä<abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Osoite"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="integration[street_address]"
                        id="integration_street_address"
                      />
                    </div>
                  </div>

                  <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Työkohteen Paikkakunta<abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Kaupunki"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="integration[street_address]"
                        id="integration_street_address"
                      />
                    </div>
                    <div className="w-full flex flex-col mb-3">
                      <label className="font-semibold text-gray-600 py-2">
                        Postinumero
                      </label>
                      <input
                        placeholder="Postinumero"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        type="text"
                        name="integration[street_address]"
                        id="integration_street_address"
                      />
                    </div>
                  </div>
                  <div className="flex-auto w-full mb-1 text-xs space-y-2">
                    <label className="font-semibold text-gray-600 py-2">
                      Ilmoituksen kuvaus
                    </label>
                    <br />
                    <span className="text-gray-600 py-2">
                      Kerro tarkemmin, mistä työtehtävästä on kyse. Kerro myös
                      yrityksestä, bonuksista ja muista eduista.
                    </span>
                    <textarea
                      required
                      name="message"
                      id
                      className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                      placeholder=""
                      spellCheck="false"
                      defaultValue={""}
                    />
                    <p className="text-xs text-gray-400 text-left my-3">
                      You inserted 0 characters
                    </p>
                  </div>
     
                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      {" "}
                      Tallenna
                    </button>
                    <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                      Jatka
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="lg:ml-64 lg:mr-64 sm:ml-32 sm:mr-32">
        <div className="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <h2 className="font-semibold text-lg mr-auto">Palkkaus</h2>

              <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Minimi
                  </label>
                  <input
                    placeholder="Palkka"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                    name="integration[street_address]"
                    id="integration_street_address"
                  />
                </div>
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Maksimi
                  </label>
                  <input
                    placeholder="Palkka"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    type="text"
                    name="integration[street_address]"
                    id="integration_street_address"
                  />
                </div>
              </div>
              <div className="flex-auto w-full mb-1 text-xs space-y-2">
                <label className="font-semibold text-gray-600 py-2">
                  Ilmoituksen kuvaus
                </label>
                <br />
                <span className="text-gray-600 py-2">
                  Kerro tarkemmin, mistä työtehtävästä on kyse. Kerro myös
                  yrityksestä, bonuksista ja muista eduista.
                </span>
                <textarea
                  required
                  name="message"
                  id
                  className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                  placeholder=""
                  spellCheck="false"
                  defaultValue={""}
                />
                <p className="text-xs text-gray-400 text-left my-3">
                  You inserted 0 characters
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center">
                <h2 className="font-semibold text-lg mr-auto">
                  Ilmoituksen lisätiedot
                </h2>
                <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
              </div>
              <div className="mt-5">
                <div className="form">
                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Työaika <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="Ilmoituksen postio"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="integration[shop_name]"
                        id="integration_shop_name"
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Työsuhde <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Yrityksen nimi"
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="integration[shop_name]"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <p className="text-xs text-red-500 text-right my-3">
                    Täytä tähdillä merkityt kohdat
                    <abbr title="Required field">*</abbr>
                  </p>

                  <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                    <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                      {" "}
                      Tallenna
                    </button>
                    <button className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500">
                      Jatka
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JataIlmoitus;
