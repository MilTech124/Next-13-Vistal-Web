import React from "react";
import Garages from "../../components/Shoop/Garages";
import Heading from "../../components/ui/Heading";
import axios from "axios";
// TRANSLATION
import { useTranslation } from "next-i18next";

function sklep({ garages }) {
  // eslint-disable-next-line
  const { t } = useTranslation("sklep");
  return (
    <section id="sklep">
      <Heading title={t("Garaże Blaszane")} />
      <Garages garages={garages} />
    </section>
  )
}

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  const garages = await axios.get(process.env.WP_GARAGES);

  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "footer", "menu", "sklep","garaz"],
        null,
        ["pl", "sk"]
      )),
      garages: garages.data,
    },
    revalidate: 100,
  };
};

export default sklep;
