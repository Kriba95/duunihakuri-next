import React, { useContext } from "react";
import { useRouter } from "next/router";

import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Image from "@material-tailwind/react/Image";
import H5 from "@material-tailwind/react/Heading5";
import Icon from "@material-tailwind/react/Icon";
import LeadText from "@material-tailwind/react/LeadText";
import Button from "@material-tailwind/react/Button";
import { LoginContext } from "../context/loginstate";
// import ProfilePicture from 'assets/img/team-1-800x800.jpg';

export default function ProfileCard() {
  const { rootLoginState } = useContext(LoginContext);
  const { theUser } = rootLoginState;
  const router = useRouter();

  return (
    <Card>
      <div className="flex flex-wrap justify-center">
        <div className="w-48 px-4 -mt-24">
          {/* <Image src={ProfilePicture} rounded raised /> */}
        </div>
        <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              22
            </span>
            <span className="text-sm text-gray-700">Tykätty</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              89
            </span>
            <span className="text-sm text-gray-700">Viestejä</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              10
            </span>
            <span className="text-sm text-gray-700">Hakuvahteja</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <H5 color="gray">
          {theUser.Etunimi} {theUser.sukunimi}
        </H5>
        <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
          <Icon name="place" size="xl" />
          {theUser.osoite}, {theUser.kaupunki}
        </div>
        <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
          <Icon name="work" size="xl" />
          {theUser.nykyinentyo}
        </div>
        <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
          <Icon name="account_balance" size="xl" />
          {theUser.koulutus}
        </div>
      </div>
      <CardBody>
        <div className="border-t border-lightBlue-200 text-center px-2 ">
          <LeadText color="blueGray">"theUser.tietoaMinusta"</LeadText>
        </div>
      </CardBody>
      <CardFooter>
        <div className="w-full flex justify-center -mt-8">
          <a href="/yritys/tyo" className="mt-5" >
            <Button color="purple" buttonType="link" ripple="dark">
              
              Katso kaikki ilmoitukset
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
}
