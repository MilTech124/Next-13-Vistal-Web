import React from "react";
import Garages from "../../components/Shoop/Garages";
import Heading from "../../components/ui/Heading";
import axios from "axios";

function sklep({garages}) {


  return (
    <section id="sklep">
      <Heading title="Garaże Blaszane" />
      <Garages garages={garages}/>    
    </section>
  );
}

export const getStaticProps = async () => {
 
  const garages = await axios.get(process.env.WP_GARAGES)

  return {
    props: {     
      garages:garages.data
    },
    revalidate: 10,
  };
}

export default sklep;
