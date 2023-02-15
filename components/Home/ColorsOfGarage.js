import Image from "next/image";
import React from "react";
// TRANSLATION
import { useTranslation } from 'next-i18next'


function ColorsOfGarage() {
  const { t } = useTranslation("index")

  return (
    <section id="colors-of-garage" className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-red-700 py-5">{t("Kolory garaży blaszanych")}</h2>
      <p>
        {t("Kolor-text")}
      </p>
      <Image
      src='/colors.jpg'
      width={896}
      height={387}
      className='mx-auto py-5'
      alt="kolory garazy"
      priority
      />
    </section>
  );
}

export default ColorsOfGarage;
