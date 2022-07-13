import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Content } from "../../components/Content";
import { KukaOlen } from "../../components/KukaOlen";
import { LoginContext } from "../../context/loginstate";
import { useRouter } from "next/router";

function JataIlmoitus() {
  const { rootLoginState } = useContext(LoginContext);

  const { isAuth } = rootLoginState;
 //console.log(isAuth,rootLoginState );
  const router = useRouter();


  useEffect(() => { 
    if (isAuth === false) {
      router.push("/login");
    }
  }, [isAuth, router]);

  return (
    <div className="div">
      <Head>
        <title>Duunihakuri | Kuka Olen</title>
        <meta name="description" content="Duunihakuri | Löydä etsimäsi työpaikka" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br />
      <br />
      <KukaOlen />
      <Content />
    </div>
  );
}

export default JataIlmoitus;
