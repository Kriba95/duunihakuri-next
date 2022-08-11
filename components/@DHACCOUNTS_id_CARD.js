import React from "react";

import Card from "@material-tailwind/react/components/Card";
import CardBody from "@material-tailwind/react/components/Card/CardBody";
import CardFooter from "@material-tailwind/react/components/Card/CardFooter";
// import Image from "@material-tailwind/react/components/Image";
// import H5 from "@material-tailwind/react/Heading5";
// import Icon from "@material-tailwind/react/Icon";
// import LeadText from "@material-tailwind/react/LeadText";
import Button from "@material-tailwind/react/components/Button";
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';

import Input from "@material-tailwind/react/components/Input";
import Textarea from "@material-tailwind/react/components/Textarea";

let ninja = false;

export default function IlmoitusTyo(props) {
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
                  <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      WWW Osoite
                    </th>
                    <td className="px-6 py-4">
                      <a href="">asdadasd</a>
                      {/* <Link href={ninja[0].WWWOsoite.replace(" ", "")}>
                              <a>{ninja[0].WWWOsoite.replace(" ", "")}</a>
                            </Link> */}
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* 
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
            ) : null} */}
            </div>

            <div className="sm:w-fit md:w-7/12 lg:w-8/12 md:pl-6">
              <p
                className="leading-relaxed text-base"
                // dangerouslySetInnerHTML={{ __html: ninja[0].body }}
              >
                bamsbakbmksambkasmk maks mkasm kdasmkd mask dmaskdm
              </p>
              <div className="flex md:mt-4 mt-6">
                <a
                  // href={ninja[0].WWWOsoite}
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
            {/* <p> {ninja[0].lahde}</p> */}
          </div>
        </section>
      </CardBody>
    </Card>
  );
}
