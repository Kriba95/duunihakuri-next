import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Card from "@material-tailwind/react/components/Card";
import CardBody from "@material-tailwind/react/components/Card/CardBody";
import axios from "axios";
import IlmoituksenViestit from "./IlmoituksenViestit";
import { LoginContext } from "../context/loginstate";
import HotToastNotifications from "./HotToastNotification";


const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost/duunihakuri2.0-api/"
    : "/";

// Backend Ossi Api
const Axios = axios.create({
  baseURL,
});

export default function IlmoitusTyo(props) {
  const { deleteIlmoitus } = useContext(LoginContext);
  


  let id = {
    id: props,
  };
  let omg = id.id.props.lol.id;

  let result = omg.substring(9);



  const [datas, setData] = useState([]);
  const [viestit, setViestit] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    console.log("this.getData");

    let quer = {
      id: omg,
    };

    const data = await Axios.post(
      "/api/getIlmoitukset.php",
      { quer },
      { withCredentials: true }
    )
      .then((res) => {
        console.log(res.data.data2);

        if (res.data === 0) {
          Router.push("/login");
        } else {
          console.log(res.data)
          console.log("--------------------------------------")

          setData(res.data.data1[0]);
          setViestit(res.data.data2);

          setLoading(false);
        }
      })
      .catch((err) => {
        // //console.log(err.response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const deletePost = async (e) => {
 
let datas = e.target.value;
console.log(datas)
    await deleteIlmoitus(datas);
  }

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
                    <td className="px-6 py-4"></td>
                  </tr>
                </thead>
                <tbody>
                  {!loading ? (
                    <>
                      {Object.keys(datas).map((keyName, i) => (
                        <>
                          {datas[keyName] === null ? null : (
                            <>
                              {datas[keyName] === "" ||
                              keyName === "id" ||
                              keyName === "pid" ||
                              keyName === "posted" ||
                              keyName === "save" ? null : (
                                <>
                                  <tr
                                    key={i}
                                    className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                                  >
                                    <th
                                      scope="row"
                                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                                    >
                                      {[keyName]}
                                    </th>
                                    <td className="px-6 py-4">
                                      <a href="">{datas[keyName]}</a>

                                      {/* <Link href={ninja[0].WWWOsoite.replace(" ", "")}>
      <a>{ninja[0].WWWOsoite.replace(" ", "")}</a>
    </Link> */}
                                    </td>
                                  </tr>
                                </>
                              )}
                            </>
                          )}
                        </>
                      ))}
                    </>
                  ) : (
                    <>Loading</>
                  )}
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
             
             
             
              {/* {viestit.length === 0 ? (
                <></>
              ) : (
                <>
                  <div className="flex justify-between md:mt-4 mt-6">
                    <Link href="/jata-ilmoitus">
                      <a className="text-indigo-500 inline-flex items-center ml-4">
                        Muokkaa Ilmoitusta
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
                    </Link>

                    <Link href="#">
                      <a className="text-red-500 inline-flex  ml-4">Poista</a>
                    </Link>
                  </div>
                </>
              )} */}

              <p
                className="leading-relaxed text-base"
                // dangerouslySetInnerHTML={{ __html: ninja[0].body }}
              >
                Viestit
              </p>
              <hr />

              <IlmoituksenViestit props={viestit} />

              <div className="flex justify-between md:mt-4 mt-6">
              <HotToastNotifications />

                
                <Link href="/jata-ilmoitus/288">
                  <a className="text-indigo-500 inline-flex items-center ml-4">
                    Muokkaa Ilmoitusta
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
                </Link>

                
                  <button 
                  className="text-red-500 inline-flex  ml-4"
                  value={result}
                  onClick={deletePost}
                  >Poista</button>
                
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
