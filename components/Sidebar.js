import { useState } from "react";
import Link from "next/link";


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

// import AdminNavbar from "./AdminNavbar";
// import Icon from "@material-tailwind/react/Icon";
// import H6 from "@material-tailwind/react/Heading6";
import { Icon as Icons } from "@iconify/react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  // const [showSidebar, setShowSidebar] = useState("-left-64");
  const router = useRouter();

  return (
    <>
      {showSidebar ? (
        <>
          <div
            className={`h-screen fixed top-0 md:left-0 z-50	 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64  py-4 px-6 transition-all duration-300`}
          >
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
              <a className="mt-2 text-center w-full inline-block">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Duunihakuri<span className="text-blue-700">.</span>
                  <button
                    className="text-3xl ml-3 text-black items-center cursor-pointer "
                    onClick={() => setShowSidebar(!showSidebar)}
                  >
                    x
                  </button>
                </h1>
              </a>
              <div className="flex flex-col">
                <hr className="my-4 min-w-full" />

                <ul className="flex-col min-w-full flex list-none">
                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/oma-profiili">
                      <a
                        className={
                          router.pathname == "/oma-profiili"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        {/* <Icon name="fingerprint" size="2xl" /> */}
                        Profiili
                      </a>
                    </Link>
                  </li>

                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/oma-profiili/asetukset">
                      <a
                        className={
                          router.pathname == "/oma-profiili/asetukset"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        <Icons
                          icon="mdi:cog"
                          width="25"
                          height="25"
                          hFlip={true}
                          vFlip={true}
                        />
                        Profiilin asetukset
                      </a>
                    </Link>
                  </li>

                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/yritys/tyo">
                      <a
                        className={
                          router.pathname == "/yritys/tyo"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        {/* <Icon name="fingerprint" size="2xl" /> */}
                        Omat Imoitukset
                      </a>
                    </Link>
                  </li>

                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/yritys/tiimit">
                      <a
                        className={
                          router.pathname == "/yritys/tiimit"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        {/* <Icon name="fingerprint" size="2xl" /> */}
                        Tiimit
                      </a>
                    </Link>
                  </li>
                </ul>

                <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                  <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 text-sm font-light py-3"
                    >
                      {/* <Icon name="description" size="2xl" /> */}
                      Documentation
                    </a>
                  </li>
                  <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                    <a
                                       onClick={() => setShowSidebar(false)}

                      className="flex items-center justify-center gap-4 text-sm font-light py-3"
                    >
                      Sulje
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={() => setShowSidebar(true)}
            style={{ left: "-220px" }}
            className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-black/75  w-64 z-0 py-4 px-6 transition-all duration-300`}
          >
            <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
              <a className="mt-2 text-center w-full inline-block">
                <h1 className=" font-bold text-xl cursor-pointer">
                  Duunihakuri<span className="text-blue-700">.</span>
                </h1>
              </a>
              <div className="flex flex-col">
                <hr className="my-4 min-w-full" />

                <ul className="flex-col min-w-full flex list-none">
                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/oma-profiili">
                      <a
                        className={
                          router.pathname == "/oma-profiili"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        {/* <Icon name="fingerprint" size="2xl" /> */}
                        Profiili
                      </a>
                    </Link>
                  </li>

                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/oma-profiili/asetukset">
                      <a
                        className={
                          router.pathname == "/oma-profiili/asetukset"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        <Icons
                          icon="mdi:cog"
                          width="25"
                          height="25"
                          hFlip={true}
                          vFlip={true}
                        />
                        Profiilin asetukset
                      </a>
                    </Link>
                  </li>

                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/yritys/tyo">
                      <a
                        className={
                          router.pathname == "/yritys/tyo"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        {/* <Icon name="fingerprint" size="2xl" /> */}
                        Omat Imoitukset
                      </a>
                    </Link>
                  </li>

                  <li className="px-4 rounded-lg mb-2 text-gray-700">
                    <Link href="/yritys/tiimit">
                      <a
                        className={
                          router.pathname == "/yritys/tiimit"
                            ? "flex font-bold hover:font-bold items-center gap-4 text-sm  py-3"
                            : "flex  hover:font-bold items-center gap-4 text-sm  py-3"
                        }
                      >
                        {/* <Icon name="fingerprint" size="2xl" /> */}
                        Tiimit
                      </a>
                    </Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
