
import React, { useState, useContext } from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import { LoginContext } from "../../context/loginstate";
import styles from "../../styles/Home.module.css";
import Link from "next/link";


function Index() {
  const { rootLoginState, resetPassword } = useContext(LoginContext);
  const [userInput, setUserInput] = useState({});


  const router = useRouter();
  const { mndCc } = router.query;




  const submitHandler = async (event) => {
    event.preventDefault();


    if (userInput.password === userInput.passwords) {




        let postData = {
            password: userInput.password,
            mndCc: mndCc,
        }

        console.log(postData)
        await resetPassword(postData);
    } else {
        console.log("Ei Täsmää");
    }  
  };

  const handleChange = ({ target }) => {
    let value;
    if (target.value === "") {
      value = null;
    } else {
      value = target.value;
    }
    let data = userInput;
    data[target.name] = value;
    setUserInput(data);
    
  };
  console.log(rootLoginState.log)

  return (
    <>
      <div>
        <br />
        Key is <br />
        <div>{mndCc}</div>
      </div>


        
    <div className="div">
      <Head>
        <title>Duunihakuri | Unohtunut salasana</title>
        <meta
          name="description"
          content="Duunihakuri | Löydä etsimäsi työpaikka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <br />

      <main className={styles.main} style={{ minHeight: "80vh" }}>
        <h1 className={styles.title}>
          Uusi <a href="#">salasana</a>.
        </h1>
        <div className="w-full max-w-lg p-6 m-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
            Duunihakuri.
          </h1>



          <form className="mt-6">

          {!rootLoginState.errorType ? (
            <>
            <div className="">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Salasana
                </label>
              </div>

              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            
<div className="mt-3">
<div className="flex items-center justify-between">
  <label
    htmlFor="password"
    className="block text-sm text-gray-800 dark:text-gray-200"
  >
    Salasana uudestaan
  </label>
</div>

<input
  type="password"
  name="passwords"
  onChange={handleChange}
  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
/>
</div>
</>




) : null}
            <p>
              {rootLoginState.errorType ? (
                <>
                  {!rootLoginState.eko ? (
                    <>
                      <div
                        className="mt-3 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                        role="alert"
                      >
                        <p className="font-bold">Onnistui!</p>
                        <p className="text-sm">{rootLoginState.log}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <div
                        className="mt-3 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
                        role="alert"
                      >
                        <p className="font-bold">Tarkista</p>
                        <p>{rootLoginState.log}</p>
                      </div>
                    </>
                  )}
                </>
              ) : null}
            </p>

            {!rootLoginState.errorType ? (
            <div className="mt-6">
              <button
                onClick={submitHandler}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Lähetä
              </button>
            </div>
            ) : null}
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            Joko sinulla on jo käyttäjätunnus?{" "}
            <Link href="/login">
              <a className="font-medium text-gray-700 dark:text-gray-200 hover:underline">
                Kirjaudu
              </a>
            </Link>
          </p>
        </div>
      </main>
    </div>
    </>
  );
}

export default Index;
