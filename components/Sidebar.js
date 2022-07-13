import { useState } from "react";
import Link from "next/link";
// import AdminNavbar from "./AdminNavbar";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import { Icon as Icons } from "@iconify/react";
import { useRouter } from "next/router";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const router = useRouter();

  return (
    <>
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-0 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
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
                    <Icon name="fingerprint" size="2xl" />
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
                    <Icon name="fingerprint" size="2xl" />
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
                    <Icon name="fingerprint" size="2xl" />
                    Tiimit
                  </a>
                </Link>
              </li>
              
            </ul>


            <ul className="flex-col min-w-full flex list-none absolute bottom-0">
              <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                <a
                  href="https://material-tailwind.com/documentation/quick-start"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <Icon name="description" size="2xl" />
                  Documentation
                </a>
              </li>
              <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                <a
                  href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 text-sm font-light py-3"
                >
                  Free Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
