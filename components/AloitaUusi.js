import React, { useState, useContext } from "react";
import { Context } from "../context/state";
// import { div, div, div } from "react-bootstrap";
// import * as FaIcons from "react-icons/fa";
import styles from "../styles/Home.module.css";
import Footer from "./Footer";

export default function AloitaUusi() {
  const [searchData, setSearchData] = useState({});

  const { handleSubmit } = useContext(Context);

  const handleChange = ({ target }) => {
    let value;
    if (target.value === "") {
      value = null;
    } else {
      value = target.value;
    }
    let data = searchData;
    data[target.name] = value;
    setSearchData(data);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await handleSubmit(searchData);
  };

  return (
    <>

      <header>
        <div
          className="w-full bg-center bg-cover h-[32rem]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div className="flex mt-8 lg:w-1/2 lg:justify-end lg:mt-0">
              <section className="flex flex-col max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-56">
                <div className="md:flex md:items-center md:justify-center md:w-1/3 md:bg-gray-700 md:dark:bg-gray-800">
                  <div className="px-6 py-6 md:px-8 md:py-0">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
                      Duunihakurilla{" "}
                      <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                        löydät
                      </span>{" "}
                      kaikki työpaikat yhdellä haulla
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
                      Yritä etsiä sijainnin tai työtehtävän perusteella
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 sm:w-full md:w-2/3 md:bg-gray-700 md:dark:bg-gray-800">
                  <form className="">
                    <div className="flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                      <input
                        className="px-6 py-2 text-white placeholder-gray-500 bg-gray-700 outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                        type="text"
                        name="ala"
                        placeholder="Työtehtävä"
                        aria-label="Lisää Työtehtävä"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mt-3 flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                      <input
                        className="px-6 py-2 text-white placeholder-gray-500 bg-gray-700 outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                        type="text"
                        name="citys"
                        list="kaupungit"
                        placeholder="Kaupunki"
                        aria-label="Lisää Kaupunki"
                        onChange={handleChange}
                      />
                      <datalist id="kaupungit">
                        <option value="Akaa">Akaa</option>
                        <option value="Alajärvi">Alajärvi</option>
                        <option value="Alavus">Alavus</option>
                        <option value="Espoo">Espoo</option>
                        <option value="Forssa">Forssa</option>
                        <option value="Haapajärvi">Haapajärvi</option>
                        <option value="Haapavesi">Haapavesi</option>
                        <option value="Hamina">Hamina</option>
                        <option value="Hanko">Hanko</option>
                        <option value="Harjavalta">Harjavalta</option>
                        <option value="Heinola">Heinola</option>
                        <option value="Helsinki">Helsinki</option>
                        <option value="Huittinen">Huittinen</option>
                        <option value="Hyvinkää">Hyvinkää</option>
                        <option value="Hämeenlinna">Hämeenlinna</option>
                        <option value="Iisalmi">Iisalmi</option>
                        <option value="Ikaalinen">Ikaalinen</option>
                        <option value="Imatra">Imatra</option>
                        <option value="Pietarsaari">Pietarsaari</option>
                        <option value="Joensuu">Joensuu</option>
                        <option value="Jyväskylä">Jyväskylä</option>
                        <option value="Jämsä">Jämsä</option>
                        <option value="Järvenpää">Järvenpää</option>
                        <option value="Kaarina">Kaarina</option>
                        <option value="Kajaani">Kajaani</option>
                        <option value="Kalajoki">Kalajoki</option>
                        <option value="Kangasala">Kangasala</option>
                        <option value="Kankaanpää">Kankaanpää</option>
                        <option value="Kannus">Kannus</option>
                        <option value="Karkkila">Karkkila</option>
                        <option value="Kaskinen">Kaskinen</option>
                        <option value="Kauhajoki">Kauhajoki</option>
                        <option value="Kauhava">Kauhava</option>
                        <option value="Kauniainen">Kauniainen</option>
                        <option value="Kemi">Kemi</option>
                        <option value="Kemijärvi">Kemijärvi</option>
                        <option value="Kerava">Kerava</option>
                        <option value="Keuruu">Keuruu</option>
                        <option value="Kitee">Kitee</option>
                        <option value="Kiuruvesi">Kiuruvesi</option>
                        <option value="Kokemäki">Kokemäki</option>
                        <option value="Kokkola">Kokkola</option>
                        <option value="Kotka">Kotka</option>
                        <option value="Kouvola">Kouvola</option>
                        <option value="Kristiinankaupunki">
                          Kristiinankaupunki
                        </option>
                        <option value="Kuhmo">Kuhmo</option>
                        <option value="Kuopio">Kuopio</option>
                        <option value="Kurikka">Kurikka</option>
                        <option value="Kuusamo">Kuusamo</option>
                        <option value="Lahti">Lahti</option>
                        <option value="Laitila">Laitila</option>
                        <option value="Lappeenranta">Lappeenranta</option>
                        <option value="Lapua">Lapua</option>
                        <option value="Lieksa">Lieksa</option>
                        <option value="Lohja">Lohja</option>
                        <option value="Loimaa">Loimaa</option>
                        <option value="Loviisa">Loviisa</option>
                        <option value="Maarianhamina">Maarianhamina</option>
                        <option value="Mikkeli">Mikkeli</option>
                        <option value="Mänttä">Mänttä-Vilppula</option>
                        <option value="Naantali">Naantali</option>
                        <option value="Nivala">Nivala</option>
                        <option value="Nokia">Nokia</option>
                        <option value="Nurmes">Nurmes</option>
                        <option value="Uusikaarlepyy">Uusikaarlepyy</option>
                        <option value="Närpiö">Närpiö</option>
                        <option value="Orimattila">Orimattila</option>
                        <option value="Orivesi">Orivesi</option>
                        <option value="Oulainen">Oulainen</option>
                        <option value="Oulu">Oulu</option>
                        <option value="Outokumpu">Outokumpu</option>
                        <option value="Paimio">Paimio</option>
                        <option value="Parainen">Parainen</option>
                        <option value="Parkano">Parkano</option>
                        <option value="Pieksämäki">Pieksämäki</option>
                        <option value="Pori">Pori</option>
                        <option value="Porvoo">Porvoo</option>
                        <option value="Pudasjärvi">Pudasjärvi</option>
                        <option value="Pyhäjärvi">Pyhäjärvi</option>
                        <option value="Raahe">Raahe</option>
                        <option value="Raasepori">Raasepori</option>
                        <option value="Raisio">Raisio</option>
                        <option value="Rauma">Rauma</option>
                        <option value="Riihimäki">Riihimäki</option>
                        <option value="Rovaniemi">Rovaniemi</option>
                        <option value="Saarijärvi">Saarijärvi</option>
                        <option value="Salo">Salo</option>
                        <option value="Sastamala">Sastamala</option>
                        <option value="Savonlinna">Savonlinna</option>
                        <option value="Seinäjoki">Seinäjoki</option>
                        <option value="Somero">Somero</option>
                        <option value="Suonenjoki">Suonenjoki</option>
                        <option value="Tampere">Tampere</option>
                        <option value="Tornio">Tornio</option>
                        <option value="Turku">Turku</option>
                        <option value="Ulvila">Ulvila</option>
                        <option value="Uusikaupunki">Uusikaupunki</option>
                        <option value="Vaasa">Vaasa</option>
                        <option value="Valkeakoski">Valkeakoski</option>
                        <option value="Vantaa">Vantaa</option>
                        <option value="Varkaus">Varkaus</option>
                        <option value="Viitasaari">Viitasaari</option>
                        <option value="Virrat">Virrat</option>
                        <option value="Ylivieska">Ylivieska</option>
                        <option value="Ylöjärvi">Ylöjärvi</option>
                        <option value="Ähtäri">Ähtäri</option>
                        <option value="Äänekoski">Äänekoski</option>
                      </datalist>
                      <button
                        onClick={submitHandler}
                        className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                      >
                        Hae
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
          <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2" />
        </div>
      </header>
    </>
  );
}
