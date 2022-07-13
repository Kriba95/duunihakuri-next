import React, { useState, useContext } from "react";
import Head from "next/head";
import { Context } from "../../context/state";
import Scrollez from "../../components/Scrollez";
import HeroHakuvahti from "../../components/HeroHakuvahti";
import AloitaUusi from "../../components/AloitaUusi";

//

function AvoimetTyopaikat() {
  const [valueOfUserInput, handleUserInputChange] = useState([]);

  const { rootState, fetchRandomUsers, fetchNextUsers, handleSubmit } = useContext(Context);

  const setfetchRandomUsers = async (event) => {
   //console.log("fetching");
    await fetchRandomUsers(event);
  };

  const setfetchNextUserInput = async (event, rootState) => {
    // console.log(rootState)
    await fetchNextUsers(event);
  };

  const fetchSubmit = async (event) => {
    await handleSubmit(event);
  };
// console.log(rootState)
if (rootState.nodata === 'etsi') {
  setfetchRandomUsers()
}

  return (
    <div className="div">
      <Head>
        <title>Duunihakuri | Avoimet Työpaikat</title>
        <meta
          name="description"
          content="Duunihakuri | Löydä avoimia työpaikkoja. Uusimmat työpaikat Suomessa, Sivustossa on yli 7 tuhatta ilmoitusta. Hae töitä"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AloitaUusi />

      <Scrollez
        data={rootState}
        valueOfUserInput={valueOfUserInput}
        onUserInputChange={handleUserInputChange}
        fetchNextUserInput={setfetchNextUserInput}
        fetchRandom={setfetchRandomUsers}
        fetchSubmit={fetchSubmit}
      />
  <HeroHakuvahti />
    
    </div>
  );
}

export default AvoimetTyopaikat;
