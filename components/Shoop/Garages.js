import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Garage from "../ui/Garage";

function Filters({ garages }) {
  const [filter, setFilter] = useState("Drewnopodobne");
  const nameFilters = [
    "Drewnopodobne",
    "Akrylowe",
    "Ocynk",
    "Kojce",
    "Akcesoria",
    "Wyprzedaż",
  ];
  return (
    <>
      {/* FILTERS */}
      <div className="flex pt-10 pl-10 gap-5 max-sm:pl-2 max-sm:gap-2 flex-wrap ">
        {nameFilters.map((name) => (
          <button
            key={name}
            onClick={() => setFilter(name)}
            style={filter === name ? { backgroundColor: "grey" } : null}
            className="bg-red-700 last:bg-yellow-500 text-md text-white font-semibold py-2 px-5 max-sm:px-2 rounded-xl hover:bg-yellow-400 transition-all"
          >
            {name}
          </button>
        ))}
      </div>

      {/* FILTERS */}

      <div className="pt-10 flex items-center flex-col gap-5">
        {garages.map((garage) => (
          <Fade key={garage.id}>
            {filter === "Drewnopodobne" &&
            garage.acf.rodzaj === "drewnopodobny" ? (
              <Garage garage={garage} />
            ) : filter === "Akrylowe" && garage.acf.rodzaj === "akrylowy" ? (
              <Garage garage={garage} />
            ) : filter === "Kojce" && garage.acf.rodzaj === "kojce" ? (
              <Garage garage={garage} />
            ) : filter === "Wyprzedaż" && garage.acf.wyprzedaz ? (
              <Garage garage={garage} />
            ) : filter === "Akcesoria" && garage.acf.rodzaj === "akcesoria" ? (
              <Garage garage={garage} />
            ) : null}
          </Fade>
        ))}
      </div>
    </>
  );
}

export default Filters;
