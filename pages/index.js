import React from "react";
import axios from "axios";
import ColorsOfGarage from "../components/Home/ColorsOfGarage";
import Hero from "../components/Home/Hero";
import WhyVistal from "../components/Home/WhyVistal";
import MakeGround from "../components/Home/MakeGround";
import PopularGarage from "../components/Home/PopularGarage";
import { Fade } from "react-awesome-reveal";
import Head from "next/head";
import { useState } from "react";
import { useSelector } from "react-redux";


function Home({ data, garages }) {
  const Products = useSelector((state) => state.productsReducer.Products);

 


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Firma zajmująca się produkcją oraz sprzedażą garaży blaszanych oferuje wysokiej jakości produkty, dostępne w różnych rozmiarach i kolorach" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="vistal, producent garaży blaszanych, garaże blaszane, blaszaki, garaze drewnopodobne, tanie garaże,solidne garaże, vistal garaże"/>
        <title>Vistal - producent garazy blaszanych</title>
      </Head>
      <Fade>
        <Hero data={data} Products={Products} />
      </Fade>
      <WhyVistal />
      <PopularGarage garages={garages} />
      <Fade>
        <MakeGround />
      </Fade>
      
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
      ...(await serverSideTranslations(
        locale,
        ["common", "footer", "menu", "index", "garaz"],
        null,
        ["pl", "sk"]
      )),
      data: hero.data,
      garages: garages.data,
    },
    revalidate: 100,
  };
};

export default Home;
