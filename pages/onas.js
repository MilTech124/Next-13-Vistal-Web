
import React from "react";
import Hero from "../components/About/Hero";
import Icons from "../components/About/Icons";
import Heading from "../components/ui/Heading";
import { Fade} from "react-awesome-reveal";
// TRANSLATION
import { useTranslation } from 'next-i18next'

function o_nas() {
  // eslint-disable-next-line
  const { t } = useTranslation("onas")
  return (
    <>
     <Heading title={t("O Nas")} />
     <Fade><Hero/></Fade>
     <Icons/>

    </>
  );
}

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
 
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer","menu","onas"],null,['pl','sk'])),  
    },
  
  };
};

export default o_nas;
