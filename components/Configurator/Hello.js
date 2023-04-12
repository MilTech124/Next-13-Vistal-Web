import Image from "next/image";
import React from "react";

function Hello() {
  const logo = "/vistal-logo.jpg";
  return (
    <div className="flex flex-col items-center">
      <Image src={logo} width={200} height={200} alt="logo"/>
      <h1 className="text-2xl font-semibold">
        Witajcie w konfiguratorze garazu{" "}
      </h1>
      <p className="py-5">
        Jesteśmy zadowoleni, że zdecydowałeś/aś się skorzystać z naszych usług.
        Dzięki naszemu narzędziu będziesz mógł/mogła zaprojektować swój
        wymarzony garaż i dopasować go do swoich potrzeb.Cieszmy się razem z
        Tobą na myśli o nowym, funkcjonalnym i estetycznym garażu!
      </p>
      <p className="text-sm text-red-800 font-light">
        Konfigurator garaży to narzędzie do przybliżonej wizualizacji
        projektowanego garażu. Ostateczny wygląd może różnić się od
        wizualizacji, dlatego zalecamy potwierdzenie wszystkich szczegółów z
        naszym zespołem przed złożeniem zamówienia.
      </p>
	  
    </div>
  );
}

export default Hello;
