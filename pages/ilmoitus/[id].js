export const getStaticPaths = async () => {
  const res = await fetch("http://localhost/duunihakuri2.0-api/api/getsp.php");
  const data = await res.json();
  const paths = data.map((ninja) => {
    ////console.log(ninja.id.toString())
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "http://localhost/duunihakuri2.0-api/api/yksittainen.php/?id=" + id
  );
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

import Head from "next/head";
import Link from "next/link";

import React, { lazy, Suspense } from "react";
const HeaderComponent = lazy(() => import("./HeaderComponent"));
const renderLoader = () => (
  <svg
    role="status"
    className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
    viewBox="0 0 100 101"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
      fill="currentColor"
    />
    <path
      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
      fill="currentFill"
    />
  </svg>
);

const Tyokohde = ({ ninja }) => {
  // console.log("dsa");
  return (
    <>
      <Head>
        <title>Duunihakuri | Avoimet työpaikat </title>
        <meta
          name="description"
          content={`
          Avoimet työpaikat ${ninja[0].cityNames}, ${ninja[0].areaNames}.
          Haetaan ${ninja[0].shortTitle}`}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>

          <Suspense fallback={renderLoader()}>
            <HeaderComponent />
          </Suspense>
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {ninja[0].Ilmoitusjatetty}
            </p>
            <h1 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {ninja[0].shortTitle}
            </h1>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Hae työpaikkaa alueeelta {ninja[0].areaNames},{" "}
              {ninja[0].cityNames}
            </p>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              {ninja[0].yritys}
            </p>
            <div className="flex items-center">
              {ninja[0].WWWOsoite ? (
                <>
                  <a
                    href={ninja[0].WWWOsoite.replace(" ", "")}
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-gray-800 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Hae
                  </a>
                  {/* <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a> */}
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container py-24 mx-auto md:flex flex-wrap">
          <div className="md:w-5/12 lg:w-4/12 relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Kuvaus
                  </th>
                </tr>
              </thead>
              <tbody>
                {ninja[0].WWWOsoite !== " http://" ? (
                  <>
                    {ninja[0].WWWOsoite ? (
                      <>
                        <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                          >
                            WWW Osoite
                          </th>
                          <td className="px-6 py-4">
                            <Link href={ninja[0].WWWOsoite.replace(" ", "")}>
                              <a>{ninja[0].WWWOsoite.replace(" ", "")}</a>
                            </Link>
                          </td>
                        </tr>
                      </>
                    ) : null}
                  </>
                ) : null}

                {ninja[0].Palkkaus ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Palkkaus
                      </th>
                      <td className="px-6 py-4">{ninja[0].Palkkaus}</td>
                    </tr>
                  </>
                ) : null}

                {ninja[0].Tyoaika ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Työaika
                      </th>
                      <td className="px-6 py-4">{ninja[0].Tyoaika}</td>
                    </tr>
                  </>
                ) : null}

                {ninja[0].Tyoalkaa ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Työ alkaa
                      </th>
                      <td className="px-6 py-4">{ninja[0].Tyoalkaa}</td>
                    </tr>
                  </>
                ) : null}

                {ninja[0].Tyonkesto ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Työnkesto
                      </th>
                      <td className="px-6 py-4">{ninja[0].Tyonkesto}</td>
                    </tr>
                  </>
                ) : null}

                {ninja[0].Hakupaattyy ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Haku päättyy
                      </th>
                      <td className="px-6 py-4">{ninja[0].Hakupaattyy}</td>
                    </tr>
                  </>
                ) : null}

                {ninja[0].Tyopaikanosoite ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Työpaikan osoite
                      </th>
                      <td className="px-6 py-4">{ninja[0].Tyopaikanosoite}</td>
                    </tr>
                  </>
                ) : null}

                {ninja[0].Ilmoitusjatetty ? (
                  <>
                    <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                      >
                        Ilmoitus jätetty
                      </th>
                      <td className="px-6 py-4">{ninja[0].Ilmoitusjatetty}</td>
                    </tr>
                  </>
                ) : null}
              </tbody>
            </table>

            {ninja[0].Yhteystiedot ? (
              <>
                <br />
                <br />
                <h4>
                  <b>Yhteystiedot,</b>
                </h4>
                <hr />
                <p>{ninja[0].Yhteystiedot}</p>
              </>
            ) : null}
          </div>
          <div className="sm:w-fit md:w-7/12 lg:w-8/12 md:pl-6">
            <p
              className="leading-relaxed text-base"
              dangerouslySetInnerHTML={{ __html: ninja[0].body }}
            ></p>
            <div className="flex md:mt-4 mt-6">
              <a
                href={ninja[0].WWWOsoite}
                className="text-indigo-500 inline-flex items-center ml-4"
              >
                Hae työpaikkaa
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <hr />
          <p> {ninja[0].lahde}</p>
        </div>
      </section>
    </>
  );
};
export default Tyokohde;
