import React from "react";
import axios from "axios";
import ColorsOfGarage from "../components/Home/ColorsOfGarage";
import Hero from "../components/Home/Hero";
import MakeGround from "../components/Home/MakeGround";
import PopularGarage from "../components/Home/PopularGarage";
import { Fade } from "react-awesome-reveal";



function Home({ data, garages }) {


  return (
    <>
      <Fade>
        <Hero data={data} />
      </Fade>
      <Fade>
        <MakeGround />
      </Fade>
      <PopularGarage garages={garages} />
      <Fade delay={100}>
        <ColorsOfGarage />
      </Fade>
    </>
  );
}
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  const hero = await axios.get(process.env.WP_HOME);
  const garages = await axios.get(process.env.WP_GARAGES);  
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer","menu","index"],null,['pl','sk'])),
      data: hero.data,
      garages: garages.data,
    },
    revalidate: 100,
  };
};

export default Home;
