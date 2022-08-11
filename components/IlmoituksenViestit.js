import React from "react";

function IlmoituksenViestit(props) {
  console.log(props);
  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");\n    body{\n      font-family: "Roboto", sans-serif;\n      background-color: #E2E9EE;\n    }\n    .break-inside {\n      -moz-column-break-inside: avoid;\n      break-inside: avoid;\n    }\n',
          }}
        />

        <div className="box-border mx-4 max-w-full sm:columns-2 md:columns-2 lg:columns-4 xl:columns-5 gap-4">
          {/* VIESTIT ILMOITUS DHACCOUNTS */}
          {Object.keys(props).map((keyName, i) => {
            console.log(props[keyName]);
            let das = props[keyName];
            return (
              <>
                {das.map((customer) => {
                  console.log(customer);
                  return (
                    <>
                      <a
                        href="#"
                        className="break-inside flex bg-white rounded-xl p-4 mb-4"
                      >
                        <div className="flex items-start space-x-4">
                          <img
                            className="flex-none w-14 h-14 rounded-full object-cover"
                            src="https://randomuser.me/api/portraits/women/50.jpg"
                            alt="avatar"
                          />
                          <div className="flex-auto">
                            <h5 className="no-underline font-bold">
                              {customer.sender}
                            </h5>
                            <p>
                            {customer.crypted}
                            </p>
                          </div>
                        </div>
                      </a>
                    </>
                  );
                })}
              </>
            );
          })}
          {/* LOPPU VIESTIT ILMOITUS DHACCOUNTS */}
        </div>
      </div>
    </>
  );
}

export default IlmoituksenViestit;
