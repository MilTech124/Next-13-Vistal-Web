import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Garage from "../ui/Garage";
import { useDispatch } from "react-redux";
import { change } from "../../store/reducers/products.reducer";
import { useSelector } from "react-redux";
// TRANSLATION
import { useTranslation } from 'next-i18next'

function Filters({ garages}) {
  const { t } = useTranslation("sklep")
  const dispatch = useDispatch()
  const currentProduct = useSelector((state) => state.productsReducer.currentproduct);

  const changeProduct = (name) => {
    dispatch(change(name));
    setFilter(name);
  };

  const [filter, setFilter] = useState(currentProduct);
  const nameFilters = [
    t("Drewnopodobne"),
    t("Akrylowe"),
    t("Ocynk"),
    t("Kojce"),
    t("Warstwowe"),
    t("Akcesoria"),
    t("Wyprzedaż"),
  ];
  return (
    <>
    {currentProduct}
      {/* FILTERS */}
      <div className="flex pt-10 pl-10 gap-5 max-sm:pl-2 max-sm:gap-2 flex-wrap ">
        {nameFilters.map((name) => (
          <button type="button"
            key={name}
            onClick={() => changeProduct(name)}
            style={filter === name ? { backgroundColor: "grey" } : null}
            className="bg-red-700 last:bg-yellow-500 text-md text-white font-semibold py-2 px-5 max-sm:px-2 rounded-xl hover:bg-yellow-400 transition-all"
          >
            {name}
          </button>
        ))}
      </div>

      {/* FILTERS */}

      <div className="py-10 flex items-center flex-col gap-5">
        {garages.map((garage) => (
          <Fade key={garage.id}>
            {filter === t("Drewnopodobne") &&
            garage.acf.rodzaj === "drewnopodobny" ? (
              <Garage garage={garage} />
            ) : filter === t("Akrylowe") && garage.acf.rodzaj === "akrylowy" ? (
              <Garage garage={garage} />
            ) : filter === t("Kojce") && garage.acf.rodzaj === "kojce" ? (
              <Garage garage={garage} />
            ) : filter === t("Ocynk") && garage.acf.rodzaj === "ocynkowy" ? (
              <Garage garage={garage} />
            ) : filter === t("Warstwowe") && garage.acf.rodzaj === "warstwowy" ? (
              <Garage garage={garage} />
            ) : filter === t("Wyprzedaż") && garage.acf.wyprzedaz ? (
              <Garage garage={garage} />
            ) : filter === t("Akcesoria") && garage.acf.rodzaj === "akcesoria" ? (
              <Garage garage={garage} />
            ) : null}
          </Fade>
        ))}
      </div>
    </>
  );
}


export default Filters;
