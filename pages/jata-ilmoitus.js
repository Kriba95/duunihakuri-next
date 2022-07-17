import React, { useState, useEffect, useRef, useContext } from "react";
import Head from "next/head";
import { Context } from "../context/state";
import Julkaistu from "./Ssaa";
import Stagetwo from "./Stagetwo";
import Stage from "./Stage";
import Stagethree from "./Stagethree";
import { LoginContext } from "../context/loginstate";

function JataIlmoitus() {
  const [page, setPage] = useState(1);
  const [stage, setStage] = useState(1);
  const [errorf, setError] = useState({});

  // console.log(page);

  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);

  const { rootState, handleSubmitS } = useContext(Context);
  // console.log(rootState);

  const { rootLoginState } = useContext(LoginContext);

  console.log(rootLoginState);

  const [userInput, setUserInput] = useState({});
  const [kuvaus, setKuvaus] = useState({});
  const [palkanKuvaus, setPalkanKuvaus] = useState({});
  const [dataa, setdata] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...state,
      kuvaus,
      palkanKuvaus,
    };

    console.log(event);
    setdata(data);

    const length = Object.keys(data).length;

    console.log(length);

    if (event.target.value === "Tallenna") {
      console.log("all Good Tallennna <-_--__---");
      await handleSubmitS({
        data: data,
        save: 1,
      });
    } else {
      handleValidation();
      if (length === 15) {
        console.log("trying to submit");
        await handleSubmitS(data);
      } else console.log("error fill inputs");
    }
    return;

    // await handleSubmit(event);
  };

  function handleValidation() {
    let fields = state;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["cityNames"]) {
      formIsValid = false;
      errors["cityNames"] = "Ei voi olla tyhjä";
    }

    if (typeof fields["cityNames"] !== "undefined") {
      if (!fields["cityNames"].match(/^[a-ö A-Ö , .]+$/)) {
        formIsValid = false;
        errors["cityNames"] = "Vain kirjaimia";
      }
    }

    //HakulomakkeenWWWosoite
    if (!fields["HakulomakkeenWWWosoite"]) {
      formIsValid = false;
      errors["HakulomakkeenWWWosoite"] = "Ei voi olla tyhjä";
    }

    // if (typeof fields["HakulomakkeenWWWosoite"] !== "undefined") {
    //   if (!fields["HakulomakkeenWWWosoite"].match(/^[a-ö A-Ö 0-9]+$/)) {
    //     formIsValid = false;
    //     errors["HakulomakkeenWWWosoite"] = "Vain kirjaimia";
    //   }
    // }
    //WWWOsoite
    if (!fields["WWWOsoite"]) {
      formIsValid = false;
      errors["WWWOsoite"] = "Ei voi olla tyhjä";
    }

    //fields.Hakupaattyy
    if (!fields["Hakupaattyy"]) {
      formIsValid = false;
      errors["Hakupaattyy"] = "Ei voi olla tyhjä";
    }

    // if (typeof fields["Hakupaattyy"] !== "undefined") {
    //   if (!fields["Hakupaattyy"].match(/^[a-ö A-Ö]+$/)) {
    //     formIsValid = false;
    //     errors["Hakupaattyy"] = "Vain kirjaimia";
    //   }
    // }

    //fields.Jobtype
    if (!fields["Jobtype"]) {
      formIsValid = false;
      errors["Jobtype"] = "Ei voi olla tyhjä";
    }

    // if (typeof fields["Jobtype"] !== "undefined") {
    //   if (!fields["Jobtype"].match(/^[a-ö A-Ö]+$/)) {
    //     formIsValid = false;
    //     errors["Jobtype"] = "Vain kirjaimia";
    //   }
    // }

    //fields.Maa
    if (!fields["Maa"]) {
      formIsValid = false;
      errors["Maa"] = "Ei voi olla tyhjä";
    }

    if (typeof fields["Maa"] !== "undefined") {
      if (!fields["Maa"].match(/^[a-ö A-Ö]+$/)) {
        formIsValid = false;
        errors["Maa"] = "Valitse maa";
      }
    }

    //fields.postalCode
    if (!fields["postalCode"]) {
      formIsValid = false;
      errors["postalCode"] = "Ei voi olla tyhjä";
    }

    if (typeof fields["postalCode"] !== "undefined") {
      if (!fields["postalCode"].match(/^[0-9]+$/)) {
        formIsValid = false;
        errors["postalCode"] = "Oikea postinumero";
      }
    }

    // //fields.SalaryMax
    // if (!fields["SalaryMax"]) {
    //   formIsValid = false;
    //   errors["SalaryMax"] = "Ei voi olla tyhjä";
    // }

    // if (typeof fields["SalaryMax"] !== "undefined") {
    //   if (!fields["SalaryMax"].match(/^[0-9]+$/)) {
    //     formIsValid = false;
    //     errors["SalaryMax"] = "max Palkka";
    //   }
    // }

    // //fields.SalaryMin
    // if (!fields["SalaryMin"]) {
    //   formIsValid = false;
    //   errors["SalaryMin"] = "Ei voi olla tyhjä";
    // }

    // if (typeof fields["SalaryMin"] !== "undefined") {
    //   if (!fields["SalaryMin"].match(/^[a-ö A-Ö]+$/)) {
    //     formIsValid = false;
    //     errors["SalaryMin"] = "Vain kirjaimia";
    //   }
    // }

    //fields.shortTitle
    if (!fields["shortTitle"]) {
      formIsValid = false;
      errors["shortTitle"] = "Ei voi olla tyhjä";
    }

    if (typeof fields["shortTitle"] !== "undefined") {
      if (!fields["shortTitle"].match(/^[a-ö A-Ö]+$/)) {
        formIsValid = false;
        errors["shortTitle"] = "Vain kirjaimia";
      }
    }

    //fields.Tyopaikanosoite
    if (!fields["Tyopaikanosoite"]) {
      formIsValid = false;
      errors["Tyopaikanosoite"] = "Ei voi olla tyhjä";
    }

    if (typeof fields["Tyopaikanosoite"] !== "undefined") {
      if (!fields["Tyopaikanosoite"].match(/^[a-ö A-Ö]+$/)) {
        formIsValid = false;
        errors["Tyopaikanosoite"] = "Vain kirjaimia";
      }
    }

    //fields.yritys
    if (!fields["yritys"]) {
      formIsValid = false;
      errors["yritys"] = "Ei voi olla tyhjä";
    }

    if (typeof fields["yritys"] !== "undefined") {
      if (!fields["yritys"].match(/^[a-ö A-Ö]+$/)) {
        formIsValid = false;
        errors["yritys"] = "Vain kirjaimia";
      }
    }

    if (formIsValid) {
      setPage(2);
      setStage(2);
    } else {
      setError(errors);
    }

    // //Email
    // if (!fields["email"]) {
    //   formIsValid = false;
    //   errors["email"] = "Ei voi olla tyhjä";
    // }

    // if (typeof fields["email"] !== "undefined") {
    //   let lastAtPos = fields["email"].lastIndexOf("@");
    //   let lastDotPos = fields["email"].lastIndexOf(".");

    //   if (
    //     !(
    //       lastAtPos < lastDotPos &&
    //       lastAtPos > 0 &&
    //       fields["email"].indexOf("@@") == -1 &&
    //       lastDotPos > 2 &&
    //       fields["email"].length - lastDotPos > 2
    //     )
    //   ) {
    //     formIsValid = false;
    //     errors["email"] = "Email is not valid";
    //   }
    // }
    console.log(state);

    // this.setState({ errors: errors });
    return formIsValid;
  }

  const [state, setState] = React.useState({
    HakulomakkeenWWWosoite: "",
    Hakupaattyy: "",
    Jobtype: "",
    Maa: "",
    SalaryMax: "",
    SalaryMin: "",
    Tyopaikanosoite: "",
    WWWOsoite: "",
    cityNames: "",
    postalCode: "",
    shortTitle: "",
    tyoaika: "",
    yritys: "",
  });
  // console.log(state);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  // console.log(kuvaus);
  const [inputValue, setInputValue] = React.useState("");

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };
  return editorLoaded ? (
    <>
      <Head>
        <title>Duunihakuri | Jätä Ilmoitus</title>
        <meta
          name="description"
          content="Duunihakuri | Löydä etsimäsi työpaikka"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {page !== 4 ? <Stage {...{ stage, setPage, page }} /> : <></>}

      {page === 1 ? (
        <form onSubmit={handleSubmit}>
          <div>
            <div
              style={page === 1 ? { display: "block" } : { display: "none" }}
              className="lg:ml-64 lg:mr-64 sm:ml-32 sm:mr-32"
            >
              <div className="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                  <div className="flex flex-col ">
                    <div className="flex flex-col sm:flex-row items-center">
                      <h2 className="font-semibold text-lg mr-auto">
                        Ilmoituksen tiedot
                      </h2>
                      <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                    </div>
                    <div className="mt-5">
                      <div className="form">
                        <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                          <div className="mb-3 space-y-2 w-full text-xs">
                            <label className="font-semibold text-gray-600 py-2">
                              Ilmoituksen otsikko{" "}
                              <abbr title="required">*</abbr>
                            </label>

                            <input
                              placeholder="Ilmoituksen postio"
                              className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                              required="required"
                              type="text"
                              name="shortTitle"
                              value={state.shortTitle}
                              onChange={(e) => {
                                handleChange(e);
                              }}
                            />

                            {typeof errorf["shortTitle"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["shortTitle"]}
                              </p>
                            ) : null}
                          </div>

                          <div className="mb-3 space-y-2 w-full text-xs">
                            <label className="font-semibold text-gray-600 py-2">
                              Työnantaja <abbr title="required">*</abbr>
                            </label>
                            <input
                              placeholder="Yrityksen nimi"
                              className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                              required="required"
                              type="text"
                              name="yritys"
                              value={state.yritys}
                              onChange={handleChange}
                            />

                            {typeof errorf["yritys"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["yritys"]}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className=" font-semibold text-gray-600 py-2">
                            Yrityksen WWW-Osoite
                          </label>
                          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                            <div className="flex">
                              <span className="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="font-bold flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                              placeholder="https://"
                              name="WWWOsoite"
                              value={state.WWWOsoite}
                              onChange={handleChange}
                            />
                          </div>
                          {typeof errorf["WWWOsoite"] !== "undefined" ? (
                            <p className="text-xs text-red-500 text-right my-3">
                              {errorf["WWWOsoite"]}
                            </p>
                          ) : null}
                        </div>
                        <div className="mb-3 space-y-2 w-full text-xs">
                          <label className=" font-semibold text-gray-600 py-2">
                            Hakulomakkeen WWW-Osoite tai puhelinnumero
                          </label>
                          <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                            <div className="flex">
                              <span className="flex  leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="font-bold flex-shrink flex-grow flex-auto leading-normal w-px  border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                              placeholder="https://"
                              name="HakulomakkeenWWWosoite"
                              required="required"
                              onChange={handleChange}
                              value={state.HakulomakkeenWWWosoite}
                            />
                          </div>
                          {typeof errorf["HakulomakkeenWWWosoite"] !==
                          "undefined" ? (
                            <p className="text-xs text-red-500 text-right my-3">
                              {errorf["HakulomakkeenWWWosoite"]}
                            </p>
                          ) : null}
                        </div>
                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Työkohteen tai yrityksen osoite
                            </label>
                            <input
                              placeholder="Osoite"
                              className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                              type="text"
                              name="Tyopaikanosoite"
                              value={state.Tyopaikanosoite}
                              onChange={handleChange}
                            />
                            {typeof errorf["Tyopaikanosoite"] !==
                            "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["Tyopaikanosoite"]}
                              </p>
                            ) : null}
                          </div>
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Maa<abbr title="required">*</abbr>
                            </label>
                            <select
                              className="font-bold block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                              required="required"
                              name="Maa"
                              onChange={handleChange}
                              value={state.Maa}
                            >
                              <option className="font-bold" value="Valitse">
                                Valitse
                              </option>

                              <option className="font-bold" value="Suomi">
                                Suomi
                              </option>
                              <option className="font-bold" value="Ruotsi">
                                Ruotsi
                              </option>
                              <option className="font-bold" value="Viro">
                                Viro
                              </option>
                              <option className="font-bold" value="Muu">
                                muu
                              </option>
                            </select>
                            {typeof errorf["Maa"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["Maa"]}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Viimeinen hakupäivä
                              <abbr title="required">*</abbr>
                            </label>
                            <input
                              placeholder="PP.KK.VV"
                              className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                              type="datetime-local"
                              required="required"
                              name="Hakupaattyy"
                              value={state.Hakupaattyy}
                              onChange={handleChange}
                            />
                            {typeof errorf["Hakupaattyy"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["Hakupaattyy"]}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Työkohteen Paikkakunta
                              <abbr title="required">*</abbr>
                            </label>
                            <input
                              required="required"
                              placeholder="Kaupunki"
                              className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                              type="text"
                              name="cityNames"
                              value={state.cityNames}
                              onChange={handleChange}
                            />
                            {typeof errorf["cityNames"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["cityNames"]}
                              </p>
                            ) : null}
                          </div>
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Postinumero
                            </label>
                            <input
                              required="required"
                              placeholder="Postinumero"
                              className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                              type="text"
                              name="postalCode"
                              value={state.postalCode}
                              onChange={handleChange}
                            />
                            {typeof errorf["postalCode"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["postalCode"]}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="flex-auto w-full mb-1 text-xs space-y-2">
                          <label className="font-semibold text-gray-600 py-2">
                            Ilmoituksen kuvaus
                          </label>
                          <br />
                          <span className="text-gray-600 py-2">
                            Kerro tarkemmin, mistä työtehtävästä on kyse. Kerro
                            myös yrityksestä, bonuksista ja muista eduista.
                          </span>

                          <CKEditor
                            required="required"
                            editor={ClassicEditor}
                            data=""
                            onInit={(editor) => {
                              // You can store the "editor" and use when it is needed.
                              console.log("Editor is ready to use!", editor);
                            }}
                            onChange={(event, editor) => {
                              const data = editor.getData();

                              // console.log({ event, editor, data });
                              setKuvaus({ kuvaus: data });
                            }}
                          />
                          {typeof errorf["kuvaus"] !== "undefined" ? (
                            <p className="text-xs text-red-500 text-right my-3">
                              {errorf["kuvaus"]}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />

            <div
              style={page === 1 ? { display: "block" } : { display: "none" }}
              className="lg:ml-64 lg:mr-64 sm:ml-32 sm:mr-32"
            >
              <div className="w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
                <div className="grid  gap-8 grid-cols-1">
                  <div className="flex flex-col ">
                    <h2 className="font-semibold text-lg mr-auto">Palkkaus</h2>

                    <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                      <div className="w-full flex flex-col mb-3">
                        <label className="font-semibold text-gray-600 py-2">
                          Minimi
                        </label>
                        <input
                          placeholder="Palkka"
                          className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="SalaryMin"
                          value={state.SalaryMin}
                          onChange={handleChange}
                        />
                        {typeof errorf["SalaryMin"] !== "undefined" ? (
                          <p className="text-xs text-red-500 text-right my-3">
                            {errorf["SalaryMin"]}
                          </p>
                        ) : null}
                      </div>
                      <div className="w-full flex flex-col mb-3">
                        <label className="font-semibold text-gray-600 py-2">
                          Maksimi
                        </label>
                        <input
                          placeholder="Palkka"
                          className="font-bold appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                          type="text"
                          name="SalaryMax"
                          required
                          id="integration_street_address"
                          value={state.SalaryMax}
                          onChange={handleChange}
                        />
                        {typeof errorf["SalaryMax"] !== "undefined" ? (
                          <p className="text-xs text-red-500 text-right my-3">
                            {errorf["SalaryMax"]}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    <label className="inline-flex items-center">
                      <input type="checkbox" className="w-6 h-6 rounded" />
                      <span className="ml-2">Ilmoitan palkasta myöhemmin</span>
                    </label>

                    <div className="flex-auto w-full mb-1 text-xs space-y-2">
                      <label className="font-semibold text-gray-600 py-2">
                        Kuvaus{" "}
                      </label>
                      <br />
                      {/* <span className="text-gray-600 py-2">
                    Kerro tarkemmin, mistä työtehtävästä on kyse. Kerro myös
                    yrityksestä, bonuksista ja muista eduista.
                  </span> */}

                      <CKEditor
                        editor={ClassicEditor}
                        data=""
                        onInit={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          // console.log({ event, editor, data });
                          setPalkanKuvaus({ palkanKuvaus: data });
                        }}
                      />
                      {typeof errorf["palkanKuvaus"] !== "undefined" ? (
                        <p className="text-xs text-red-500 text-right my-3">
                          {errorf["palkanKuvaus"]}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center">
                      <h2 className="font-semibold text-lg mr-auto">
                        Ilmoituksen lisätiedot
                      </h2>
                      <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0" />
                    </div>
                    <div className="mt-5">
                      <div className="form">
                        <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Työaika<abbr title="required">*</abbr>
                            </label>
                            <select
                              className="font-bold block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                              required="required"
                              name="tyoaika"
                              onChange={handleChange}
                              value={state.tyoaika}
                            >
                              <option className="font-bold" value="Valitse">
                                Valitse
                              </option>

                              <option className="font-bold" value="Osa-aikatyö">
                                Osa-aikatyö
                              </option>
                              <option
                                className="font-bold"
                                value="Kokopäivätyö"
                              >
                                Kokopäivätyö
                              </option>

                              <option className="font-bold" value="muu">
                                muu
                              </option>
                            </select>
                            {typeof errorf["tyoaika"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["tyoaika"]}
                              </p>
                            ) : null}
                          </div>
                          <div className="w-full flex flex-col mb-3">
                            <label className="font-semibold text-gray-600 py-2">
                              Työsuhde<abbr title="required">*</abbr>
                            </label>
                            <select
                              className="font-bold block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                              required="required"
                              name="Jobtype"
                              value={state.Jobtype}
                              onChange={handleChange}
                            >
                              <option className="font-bold" value="Valitse">
                                Valitse
                              </option>

                              <option
                                className="font-bold"
                                value="Määräaikainen työsuhde"
                              >
                                Määräaikainen työsuhde
                              </option>
                              <option
                                className="font-bold"
                                value="Vakituinen työsuhde"
                              >
                                Vakituinen työsuhde
                              </option>
                              <option className="font-bold" value="muu">
                                muu
                              </option>
                            </select>
                            {typeof errorf["Jobtype"] !== "undefined" ? (
                              <p className="text-xs text-red-500 text-right my-3">
                                {errorf["Jobtype"]}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                          {rootLoginState.isAuth === false ? null : (
                            <>
                              {" "}
                              <button
                                onClick={handleSubmit}
                                type="button"
                                value="Tallenna"
                                className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                              >
                                {" "}
                                Tallenna
                              </button>
                            </>
                          )}
                          <input
                            type="submit"
                            value="Jatka"
                            className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                          />
                          {Object.keys(errorf).length > 0 ? (
                            <p className="text-xs text-red-500 text-right my-3">
                              Täytä tähdillä merkityt kohdat
                              <abbr title="Required field">*</abbr>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            <br />
          </div>
        </form>
      ) : (
        <>
          {page === 2 ? (
            <Stagetwo {...{ setPage, setStage }} />
          ) : (
            <>
              {page === 3 ? (
                <Stagethree {...{ state, setPage, setStage }} />
              ) : (
                <>
                  <Julkaistu />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  ) : (
    <div className="md:ml-64 md:mr-64">Sivua Ladataan</div>
  );
}
export default JataIlmoitus;
