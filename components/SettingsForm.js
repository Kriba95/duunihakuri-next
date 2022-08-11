import React, { useContext, useState, useEffect, useMemo } from "react";
import axios from "axios";

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
import { LoginContext } from "../context/loginstate";

// import { useCookies } from "react-cookie";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost/duunihakuri2.0-api/"
    : "/";
// Backend Ossi Api
const Axios = axios.create({
  baseURL,
});

export default function SettingsForm() {
  const { sendUserData, rootLoginState, getUserData } =
    useContext(LoginContext);
  const { theUser } = rootLoginState;
  const [profileData, setProfileData] = useState({});

  const fetchSubmit = async (event) => {
    event.preventDefault();
    // console.log(profileData)
    await sendUserData(profileData);
  };

  // useEffect(() => {
  //   const getUser = async () => {
  //     await getUserData();
  //   };
  //   getUser().then().catch(console.error);
  // }, []);

  const handleChange = ({ target }) => {
    let value;
    if (target.value === "") {
      value = null;
    } else {
      value = target.value;
    }
    let data = profileData;
    data[target.name] = value;
    setProfileData(data);
  };

  console.log(rootLoginState.hasValue);

  if (!rootLoginState.hasValue) {
    console.log("random balue");
  }

  return (
    <Card>
      <div className="bg-gradient-to-tr from-blue-600   -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8  shadow-lg-light-blue bg-gray-900">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
            Minun tili
          </h2>
        </div>
      </div>
      <CardBody>
        <form>
          <h6 className="block font-bold font-sans text-sm text-gray-800 dark:text-gray-800 uppercase">
            Käyttäjätili
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Käyttäjätunnus
              </label>
              <input
                type="text"
                name="username"
                defaultValue={theUser.username}
                color="lightBlue"
                size="regular"
                outline={true}
                onChange={handleChange}
                placeholder="Käyttäjätili"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Sähköposti
              </label>
              <input
                type="email"
                name="email"
                defaultValue={theUser.email}
                color="lightBlue"
                size="regular"
                outline={true}
                onChange={handleChange}
                placeholder="Sähköposti"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Etunimi
              </label>
              <input
                type="text"
                name="Etunimi"
                defaultValue={theUser.Etunimi}
                color="lightBlue"
                size="regular"
                outline={true}
                onChange={handleChange}
                placeholder="Etunimi"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Sukunimi
              </label>
              <input
                type="text"
                name="sukunimi"
                defaultValue={theUser.sukunimi}
                color="lightBlue"
                size="regular"
                outline={true}
                onChange={handleChange}
                placeholder="Sukunimi"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <h6 className="block font-bold font-sans text-sm text-gray-800 dark:text-gray-800 uppercase">
            Yhteystiedot
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-12/12 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Osoite
              </label>
              <input
                type="text"
                name="Osoite"
                defaultValue={theUser.osoite}
                color="lightBlue"
                size="regular"
                onChange={handleChange}
                outline={true}
                placeholder="Osoite"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full lg:w-4/12 pr-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Kaupunki
              </label>
              <input
                type="text"
                name="Kaupunki"
                defaultValue={theUser.kaupunki}
                color="lightBlue"
                size="regular"
                onChange={handleChange}
                outline={true}
                placeholder="Kaupunki"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full lg:w-4/12 px-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Maakunta
              </label>
              <input
                type="text"
                name="Maakunta"
                defaultValue={theUser.maakunta}
                color="lightBlue"
                onChange={handleChange}
                size="regular"
                outline={true}
                placeholder="Maakunta"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="w-full lg:w-4/12 pl-4 mb-10 font-light">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Postinumero
              </label>
              <input
                type="text"
                name="Postinumero"
                defaultValue={theUser.postinumero}
                color="lightBlue"
                size="regular"
                outline={true}
                onChange={handleChange}
                placeholder="Postinumero"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <h6 className="block font-bold font-sans text-sm text-gray-800 dark:text-gray-800 uppercase">
            Tietoa minusta
          </h6>
          <div className="flex flex-wrap mt-10 font-light">
            <label
              htmlFor="email"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Postinumero
            </label>
            <textarea
              name="TietoaMinusta"
              defaultValue={theUser.tietoaMinusta}
              onChange={handleChange}
              color="lightBlue"
              placeholder="Tietoa minusta"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md   dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <br />
          <Button onClick={fetchSubmit}>Tallenna</Button>
        </form>
      </CardBody>
    </Card>
  );
}
