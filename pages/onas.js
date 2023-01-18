
import React from "react";
import Hero from "../components/About/Hero";
import Icons from "../components/About/Icons";
import Heading from "../components/ui/Heading";
import { Fade} from "react-awesome-reveal";

function o_nas() {
  return (
    <>
     <Heading title="O Nas" />
     <Fade><Hero/></Fade>
     <Icons/>

    </>
  );
}

export default o_nas;
