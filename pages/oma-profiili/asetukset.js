import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import NoLogin from "../../components/NoLogin";
import { useCookies } from "react-cookie";
import SettingsForm from "../../components/SettingsForm";
import ProfileCard from "../../components/ProfileCard";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";
import { LoginContext } from "../../context/loginstate";

function Index(props) {
  const { rootLoginState } = useContext(LoginContext);

  const { hasValue } = rootLoginState;
  console.log(hasValue)
  console.log("WTF  ")


    return (
      
      <>
         <Head>
        <title>Duunihakuri | Asetukset</title>
        <meta name="description" content="Duunihakuri | Löydä etsimäsi työpaikka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     
        <div className="md:ml-64">
          <Sidebar />

          <div className="bg-gray-900  pt-56 pb-28 px-3 md:px-8 h-auto">

          </div>

          <div className="px-3 md:px-8 h-auto -mt-48">
            <div className="container mx-auto max-w-full">
              <div className="grid grid-cols-1 xl:grid-cols-6">
                <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
                  <SettingsForm />
                </div>
                <div className="xl:col-start-5 xl:col-end-7 px-4 mb-16 mt-14">
                  <ProfileCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );




}

export default Index;
