import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SocialsNav from "../SocialsNav";
import Burger from "./Burger";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import ChangeLang from "../ui/ChangeLang";

//translate
import { useTranslation } from "next-i18next";

function Header() {
  const { t } = useTranslation("menu");

  const links = [
    {
      name: t("Strona Główna"),
      link: "/",
    },
    {
      name:t("Sklep"),
      link: "/sklep",
    },
    {
      name: t("O Nas"),
      link: "/onas",
    },
    {
      name: t("Akcesoria"),
      link: "/akcesoria",
    },
   
    {
      name: t("Konfigurator 3D"),
      link: "https://www.skonfiguruj-garaz.pl/konfigurator/vistal",
    },
    {
      name: t("Realizacje"),
      link: "/realizacje",
    },
    {
      name: t("FAQ"),
      link: "/faq",
    },
    {
      name: t("Kontakt"),
      link: "/kontakt",
    },
  ];
  const [open, isOpen] = useState(false);

  const openMenu = () => {
    isOpen(!open);
  };
  return (
    <header className=" z-[99]  fixed w-full bg-white  text-lg shadow-lg  flex justify-center items-center  ">
      <container className="max-w-[1440px] w-full">
      <SocialsNav />
        <div className="py-2 flex justify-between items-center max-md:place-content-center">
          
            <Logo />
            
          
          <div className="md:hidden absolute right-5">
            <Burger open={open} openMenu={openMenu} />
          </div>
          <div className="max-md:hidden ml-auto pr-[5vw]">
            <Nav links={links} />
          </div>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:hidden absolute top-0 left-0 active: "
            >
              {" "}
              <NavMobile links={links} openMenu={openMenu} />
            </motion.div>
          )}
          <div className="max-md:hidden">
           
          </div>
        </div>
      </container>
      <ChangeLang />
    </header>
  );
}

export default Header;
