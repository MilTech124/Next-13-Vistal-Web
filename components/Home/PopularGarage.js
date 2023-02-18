import React from "react";
import Garage from "../ui/Garage";
import { useState } from "react";
import { Bounce } from "react-awesome-reveal";
// TRANSLATION
import { useTranslation } from 'next-i18next'

function Popular({ garages }) {
  const { t } = useTranslation("index")
  const [more, setMore] = useState(5);
  return (
    <section
      id="popular"
      className="py-10 flex flex-col items-center mx-auto text-center container"
    >
      <h2 className="text-4xl text-red-700 py-5 font-bold">
        {t("najpopularniejsze garaze")}
      </h2>
      <p className="font-bold">
        {t("text popularne")}
      </p>
      <div className=" pt-10 flex flex-col gap-5">
        {garages.slice(0, more).map((garage) => (
          <Bounce key={garage.id}>
            {" "}
            {garage.acf.popularny && <Garage garage={garage} />}
          </Bounce>
        ))}
      </div>

      <button
        onClick={() => setMore(more + 3)}
        className="btn mt-10 p-5 text-white text-xl font-bold bg-red-700 w-[52rem] max-sm:w-[90vw] rounded-md"
      >
        {t("wiecej")}
      </button>
    </section>
  );
}

export default Popular;
