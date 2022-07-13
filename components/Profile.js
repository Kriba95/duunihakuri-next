import React from "react";

import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";

export default function Profile() {
  return (
    <Card>
      <div className="bg-gradient-to-tr from-blue-600   -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8  shadow-lg-light-blue bg-gray-900">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
          Profile
          </h2>
        </div>
      </div>
      <CardBody>
        <br />
        <br />
        <h1>Empty text Profile</h1>
        <p>adasd</p>
        <br />
      </CardBody>
    </Card>
  );
}
