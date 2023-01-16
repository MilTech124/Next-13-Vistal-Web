import React from "react";
import ColorsOfGarage from "../components/Home/ColorsOfGarage";
import Hero from "../components/Home/Hero";
import MakeGround from "../components/Home/MakeGround";
import PopularGarage from "../components/Home/PopularGarage";
import { Fade } from "react-awesome-reveal";



function Home() {
  return (
    <>
     <Fade><Hero/></Fade>
      <Fade><MakeGround/></Fade>
      <PopularGarage/>
      <Fade><ColorsOfGarage/></Fade>
    </>
  );
}

// export const getStaticProps = async () => {
//   const response = await axios.get(`https://vistal-garaze-blaszane.pl/wp-json/wp/v2/ustawieniaglownej`)

//   return {
//     props: {
//       data: response.data,
//     },
//   };
// }

export default Home;
