import React from "react";

import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";

export default function ilmoitusTyo(props) {
  let id = {
    id: props,
  };
  let omg = id.id.props.lol.id;

  return (
    <Card>
      <div className="bg-gradient-to-tr from-blue-600   -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8  shadow-lg-light-blue bg-gray-900">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
            ilmoitus-yrityspaikkakunta-timestamp-id-postalcode
          </h2>
        </div>
      </div>
      <CardBody>
        <br />
        <br />
        <h4>
          <b>{omg}</b>
        </h4>

        <p>{omg}</p>
        <div className="row  flex">
          <div className="col"></div>
          <div className="">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Kuvaus
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    WWW Osoite
                  </th>
                  <td className="px-6 py-4">
                    {/* <Link href={ninja[0].WWWOsoite.replace(" ", "")}>
                              <a>{ninja[0].WWWOsoite.replace(" ", "")}</a>
                            </Link> */}
                  </td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Palkkaus
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Työaika
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Työ alkaa
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Työnkesto
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Haku päättyy
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Työpaikan osoite
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>

                <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Ilmoitus jätetty
                  </th>
                  <td className="px-6 py-4">sdadas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
      </CardBody>
    </Card>
  );
}
