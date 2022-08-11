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
