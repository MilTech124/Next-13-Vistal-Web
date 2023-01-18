import React from "react";
import axios from "axios";
import ColorsOfGarage from "../components/Home/ColorsOfGarage";
import Hero from "../components/Home/Hero";
import MakeGround from "../components/Home/MakeGround";
import PopularGarage from "../components/Home/PopularGarage";
import { Fade } from "react-awesome-reveal";
import Modal from "../components/ui/Modal";

function Home({data}) {

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
//   const response = await axios.get(`http://localhost:10016/wp-json/wp/v2`)

//   return {
//     props: {
//       data: response.data,
//     },
//   };
// }

export default Home;
