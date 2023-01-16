import React from "react";
import Garage from "../ui/Garage";
import { useState } from "react";
import { garages } from "../../data/data";
import { Bounce } from "react-awesome-reveal";

function Popular() {
  const [more, setMore] = useState(1);
  return (
    <section
      id="popular"
      className="py-10 flex flex-col items-center mx-auto text-center container"
    >
      <h2 className="text-4xl text-red-700 py-5 font-bold">
        Najpopularniejsze Garaże
      </h2>
      <p className="font-bold">
        Jesteśmy producentem kupując prosto od nas pomijasz sklepy oraz ich
        prowizje przez co nasze produkty są w bezkonkurencyjnej cenie.
      </p>
      <div className=" pt-10 flex flex-col gap-5">
        {garages.slice(0, more).map((garage) => (
          <Bounce key={garage.title}>
            {" "}
            {garage.popular && <Garage garage={garage} />}
          </Bounce>
        ))}
      </div>

      <button
        onClick={() => setMore(more + 3)}
        className="btn mt-10 p-5 text-white text-xl font-bold bg-red-700 w-[52rem] max-sm:w-[90vw] rounded-md"
      >
        Więcej
      </button>
    </section>
  );
}

export default Popular;
