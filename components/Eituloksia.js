import React from "react";

const Eituloksia = () => (
  <>
    <div className="container mx-auto mt-8">
      <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <time className="text-lg font-semibold text-gray-900 dark:text-white">
          Valitettavasti hakutuloksia ei löytynyt.
        </time>
        <hr className="text-white" />
        <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <li>
            <a className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">

              <div className="text-gray-600 dark:text-gray-400">
                <div className="text-base font-normal">
                  <span className="font-medium text-gray-900 dark:text-white"></span>{" "}
                </div>
                <div className="text-sm font-normal"> </div>
                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <div>
                        Kokeile hakea sijainnin tai työtehtävän perusteella
                    </div>

                </span>
              </div>
            </a>
          </li>
        </ol>{" "}
      </div>
    </div>
  </>
);

export default Eituloksia;
