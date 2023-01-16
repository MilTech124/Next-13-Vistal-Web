import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SocialsNav from "../SocialsNav";
import Burger from "./Burger";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion"


function Header() {
  const links=[
    {
        name:'Strona Główna',
        link:'/'
    },
    {
        name:'O Nas',
        link:'/onas'
    },
    {
        name:'Wycena',
        link:'/wycena'
    },
    {
        name:'Galeria',
        link:'/galeria'
    },
    {
        name:'Kontakt',
        link:'/kontakt'
    },
]
  const [open, isOpen] = useState(false);

  const openMenu = () =>{
    isOpen(!open)
  }
  return (
    <header className=" z-[99] relative w-full bg-white h-[75px] text-lg shadow-lg  flex justify-center items-center  ">
      <container className="max-w-[1440px] w-full">
        <div className=" flex justify-between items-center max-md:place-content-center">
          <div className=""><Logo /></div>
          <div className="md:hidden absolute right-5">
            <Burger open={open} openMenu={openMenu}/>
          </div>
          <div className="max-md:hidden ml-auto pr-[5vw]">
            <Nav links={links} />
          </div>
          {open && <motion.div initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}className="md:hidden absolute top-0 left-0 active: "> <NavMobile links={links} /></motion.div> }
          <div className="max-md:hidden">
            <SocialsNav />
          </div>
        </div>
      </container>
    </header>
  );
}

export default Header;
