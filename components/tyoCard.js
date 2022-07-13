import React, { useEffect, useContext } from "react";

import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Input from "@material-tailwind/react/Input";
import { LoginContext } from "../context/loginstate";

export default function ilmoitukset() {
  const { getIlmoitukset, rootLoginState } = useContext(LoginContext);

  useEffect(() => {
    getIlmoitukset();
  }, []);
  
  const { ilmoitukset } = rootLoginState;


  return (
    <Card>
      <div className="bg-gradient-to-tr from-blue-600   -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-24 py-4 px-8  shadow-lg-light-blue bg-gray-900">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-sans text-2xl font-bold tracking-tight text-white sm:text-2xl sm:leading-none">
            Omat Ilmoitukset
          </h2>
        </div>
      </div>
      <CardBody>
        <br />
        <br />

        <div className="grid grid-cols-6  gap-4 ">



          <div className="col-start-2  rounded-lg	  bg-gray-300 col-span-4">
            {/* {imoitukset == (ilmoitukset.map((item, i) => (<>lol</>))) : null} */}

            {/* 
          {ilmoitukset.map(name => <h2>{name}</h2>)} */}
          {ilmoitukset ? (<>{ilmoitukset.map((ilmoitukset) => {
              console.log(ilmoitukset);
              return <div key={ilmoitukset.id}>{ilmoitukset.Email} </div>;
            })}</>) : null}
      

            <br />
          </div>



          <div className="col-start-1 rorounded-lg	unded bg-gray-300 col-end-3 ...">
            <br />
            <br />
            <br />
            02
          </div>

          <div className="col-end-7 bg-gray-300 rounded-lg	 col-span-2 border-radius: 25px">
            <br />
            <br />
            <br />
            03
          </div>
          <div className="col-start-1 bg-gray-300 rounded-lg	 col-end-7 border-radius: 25px ...">
            <br />
            <br />
            <br />
            04
          </div>
        </div>
        <br />
      </CardBody>
    </Card>
  );
}
