import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { LoginContext } from "../context/loginstate";
import Link from "next/link";

export const LoginButton = () => {
  const [isMenuLogOpen, setIsMenuLogOpen] = useState(false);

  const { onSignout, rootLoginState } = useContext(LoginContext);
  console.log("LoginButton");

  const { theUser, hasValue } = rootLoginState;

  const router = useRouter();
  const destroyID = async (event) => {
    await onSignout(event);
  };

  // Jos theUser käyttäjän tiedot on ladattu contextiin.
  // theUser.hasValue
  //

  return (
    <div className="relative inline-block  transition-all duration-300">
      {/* button     */}

      {rootLoginState.isAuth === true ? (
        <button
        onClick={() => {

          setIsMenuLogOpen(!isMenuLogOpen);
        }}
        className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
          <span className="mx-1">Oma profiili</span>

     
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              />
            </svg>
   
        </button>
      ) : (
        <button className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
          
          <Link href="/login">
            <span className="mx-1">
              <a>Kirjaudu</a>
            </span>
          </Link>

          {hasValue ? (
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              />
            </svg>
          ) : null}
        </button>
      )}

      {/* toggle */}

      {isMenuLogOpen ? (
        <div className=" absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
          <Link href="/login">
            <a className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              Oma profiili
            </a>
          </Link>
          <a
            href="#"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
              alt="jane avatar"
            />
            <div className="mx-1">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {theUser.Etunimi} {theUser.sukunimi}
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {theUser.email}
              </p>
            </div>
          </a>
          <hr className="border-gray-200 dark:border-gray-700 " />

          <a
            onClick={() => {
              router.push("/oma-profiili");
              setIsMenuLogOpen(!isMenuLogOpen);

            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Oma profiili
          </a>

          <a
            onClick={() => {
              console.log("Wtg");
              router.push("/oma-profiili/asetukset");
              setIsMenuLogOpen(!isMenuLogOpen);
            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Asetukset
          </a>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <a
            onClick={() => {
              router.push("/yritys/profiili");
              setIsMenuLogOpen(!isMenuLogOpen);
            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Yritys profiili
          </a>
          <a
            onClick={() => {
              router.push("/yritys/tiimit");
              setIsMenuLogOpen(!isMenuLogOpen);
            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Tiimit
          </a>
          <a
            onClick={() => {
              router.push("/yritys/tiimit/iniviteteam");
              setIsMenuLogOpen(!isMenuLogOpen);
            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Invite colleagues
          </a>
          <hr className="border-gray-200 dark:border-gray-700 " />
          <a
            onClick={() => {
              router.push("/yritys/help");
              setIsMenuLogOpen(!isMenuLogOpen);
            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Help
          </a>
          <a
            onClick={() => {
              destroyID();
            }}
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sign Out
          </a>
        </div>
      ) : null}
    </div>
  );
};
