import React from "react";

import Card from "@material-tailwind/react/components/Card";
import CardBody from "@material-tailwind/react/components/Card/CardBody";
import Button from "@material-tailwind/react/components/Button";
import Input from "@material-tailwind/react/components/Input";

export default function MyProfile () {

  <Card>
    <div className="bg-gradient-to-tr from-blue-600   -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8  shadow-lg-light-blue bg-gray-900">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
          Example
        </h2>
      </div>
    </div>
    
    <CardBody>
      <form>
        <h6 className="block font-bold font-sans text-sm text-gray-800 dark:text-gray-800 uppercase">
          Käyttäjätilis
        </h6>
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
            <Input
              type="text"
              name="username"
              // defaultValue={theUser.username}
              color="lightBlue"
              size="regular"
              outline={true}
              // onChange={handleChange}
              placeholder="Käyttäjätili"
            />
          </div>
          <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
            <Input
              type="email"
              name="email"
              defaultValue={theUser.email}
              color="lightBlue"
              size="regular"
              outline={true}
              // onChange={handleChange}
              placeholder="Sähköposti"
            />
          </div>
  
        </div>

        <h6 className="block font-bold font-sans text-sm text-gray-800 dark:text-gray-800 uppercase">
          Yhteystiedot
        </h6>
        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-12/12 mb-10 font-light">
            <Input
              type="text"
              name="Osoite"
              // defaultValue={theUser.osoite}
              color="lightBlue"
              size="regular"
              // onChange={handleChange}
              outline={true}
              placeholder="Osoite"
            />
          </div>
          <div className="w-full lg:w-4/12 pr-4 mb-10 font-light"></div>
          <div className="w-full lg:w-4/12 px-4 mb-10 font-light"></div>
          <div className="w-full lg:w-4/12 pl-4 mb-10 font-light"></div>
        </div>

        <h6 className="block font-bold font-sans text-sm text-gray-800 dark:text-gray-800 uppercase">
          Tietoa minusta
        </h6>
        <div className="flex flex-wrap mt-10 font-light"></div>
        <br />
        <Button>Tallenna</Button>
      </form>
    </CardBody>
  </Card>
}