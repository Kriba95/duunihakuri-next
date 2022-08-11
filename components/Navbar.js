import React, { useState, useContext } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { Link as Links } from "react-scroll";
import { useRouter } from "next/router";
// import { GoogleLogout } from "react-google-login";
// import { useCookies } from "react-cookie";
import { LoginContext } from "../context/loginstate";
import { LoginButton } from "./LoginButton";

import DarkModeButton from "./useDarkModeButton";

// import Logo from "../public/streamlineLogo.png";
const clientId =
  "46477554152-s71gueq427lu14i3qskvebtdms56sv28.apps.googleusercontent.com";

function Navbar({ children, href }) {
  const [isOpen, setIsOpen] = useState(false);
  const { rootLoginState, onSignoutSuccess, onSignout } =
    useContext(LoginContext);
  const router = useRouter();

  // const [cookies] = useCookies(["CIS_1"]);

  const SignoutSuccess = async (event) => {
    await onSignoutSuccess(event);
    console.log("hei");
  };

  const destroyID = async (event) => {
    await onSignout(event);
    console.log("heihei");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <h1 className="pr-5	text-white font-bold text-xl cursor-pointer">
                Duunihakuri<span className="text-blue-700">.</span>
              </h1>
            </div>
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li className="text-white hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                <Link id="etusivu" href="/">
                  <a
                    aria-label="Our product"
                    title="Our product"
                    className={
                      router.pathname == "/"
                        ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                        : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    }
                  >
                    Etusivu
                  </a>
                </Link>
              </li>

              <li className="text-white hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                {" "}
                <Link id="ilmoitukset-as" href="/ilmoitus/avoimet-tyopaikat">
                  <a
                    aria-label="Our product"
                    title="Our product"
                    className={
                      router.pathname == "/ilmoitus/avoimet-tyopaikat"
                        ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                        : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    }
                  >
                    Avoimet Työpaikat
                  </a>
                </Link>
              </li>

              <li className="text-white  hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                {" "}
                <Link href="/jata-ilmoitus">
                  <a
                    aria-label="Product pricing"
                    title="Product pricing"
                    className={
                      router.pathname == "/jata-ilmoitus"
                        ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                        : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                    }
                  >
                    Jätä ilmoitus
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
          <LoginButton />

            {/* {rootLoginState.ShowlogoutButton ? (
              <GoogleLogout
                clientId={clientId}
                render={(renderProps) => (
                  <li className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                    <Link href="/">
                      <a
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Kirjaudu Ulos
                      </a>
                    </Link>
                  </li>
                )}
                buttonText="Sign Out"
                onLogoutSuccess={SignoutSuccess}
              ></GoogleLogout>
            ) : (
              <>
                {cookies.CIS_1 ? (
                  // 1234

                  // <li className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                  // <Link href="/">
                  //   <a
                  // onClick={() => {
                  //   destroyID();
                  // }}
                  //     className="font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                  //   >
                  //     Kirjaudu Ulos
                  //   </a>
                  // </Link>
                  // </li>
                  <>
                    <LoginButton />
                  </>
                ) : (
                  <li className="text-white hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 ">
                    <Link href="/login">
                      <a
                        className={
                          router.pathname == "/login"
                            ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                            : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                        }
                      >
                        Kirjaudu
                      </a>
                    </Link>
                  </li>
                )}
              </>
            )} */}
            <DarkModeButton />
          </ul>



          <div className="lg:hidden z-10	 ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) ; console.log("hello")
                }
              }
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex justify-center items-center flex-shrink-0 ">
                        <h1 className="pr-5	text-black font-bold text-xl cursor-pointer">
                          Duunihakuri<span className="text-blue-700">.</span>
                        </h1>
                      </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li
                        onClick={() => {
                          router.push("/");
                          setIsMenuOpen(false);
                        }}
                        className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                      >
                        <Link id="etusivu" href="/">
                          <a
                            aria-label="Our product"
                            title="Our product"
                            className={
                              router.pathname == "/"
                                ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                                : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                            }
                          >
                            Etusivu
                          </a>
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          router.push("/ilmoitus/avoimet-tyopaikat");
                          setIsMenuOpen(false);
                        }}
                        className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                      >
                        {" "}
                        <Link
                          id="ilmoitukset-as"
                          href="/ilmoitus/avoimet-tyopaikat"
                        >
                          <a
                            aria-label="Our product"
                            title="Our product"
                            className={
                              router.pathname == "/ilmoitus/avoimet-tyopaikat"
                                ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                                : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                            }
                          >
                            Avoimet Työpaikat
                          </a>
                        </Link>
                      </li>

                      <li
                        onClick={() => {
                          router.push("/jata-ilmoitus");
                          setIsMenuOpen(false);
                        }}
                        className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                      >
                        {" "}
                        <Link href="/jata-ilmoitus">
                          <a
                            aria-label="Product pricing"
                            title="Product pricing"
                            className={
                              router.pathname == "/jata-ilmoitus"
                                ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                                : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Jätä ilmoitus
                          </a>
                        </Link>
                      </li>

                      {cookies.CIS_1 ? (
                        <>
                          {/* <li
                            onClick={() => {
                              router.push("/oma-profiili");
                              setIsMenuOpen(false);
                            }}
                            className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                          >
                            <Link href="/oma-profiili">
                              <a
                                className={
                                  router.pathname == "/oma-profiili"
                                    ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                                    : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                }
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Oma profiili
                              </a>
                            </Link>
                          </li> */}
                        </>
                      ) : null}

                      {/* {rootLoginState.ShowlogoutButton ? (
                        <GoogleLogout
                          clientId={clientId}
                          render={(renderProps) => (
                            <li
                              onClick={() => {
                                router.push("/");
                                setIsMenuOpen(false);
                              }}
                              className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                            >
                              <Link href="/">
                                <a
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                  className="font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Kirjaudu Ulos
                                </a>
                              </Link>
                            </li>
                          )}
                          buttonText="Sign Out"
                          onLogoutSuccess={SignoutSuccess}
                        ></GoogleLogout>
                      ) : (
                        <>
                          {cookies.CIS_1 ? (
                            <li
                              onClick={() => {
                                router.push("/");
                                setIsMenuOpen(false);
                              }}
                              className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                            >
                              <Link href="/">
                                <a
                                  onClick={() => {
                                    destroyID();
                                  }}
                                  className="font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Kirjaudu Ulos
                                </a>
                              </Link>
                            </li>
                          ) : (
                            <li
                              onClick={() => {
                                router.push("/login");
                                setIsMenuOpen(false);
                              }}
                              className="hover:bg-gray-900  hover:text-gray-300  rounded py-1 px-2 "
                            >
                              <Link href="/login">
                                <a
                                  className={
                                    router.pathname == "/login"
                                      ? "cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
                                      : "font-medium tracking-wide  hover:text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                                  }
                                >
                                  Kirjaudu
                                </a>
                              </Link>
                            </li>
                          )}
                        </>
                      )} */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
