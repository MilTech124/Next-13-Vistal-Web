import Image from "next/image";
import React from "react";
import Heading from "../components/ui/Heading";
// TRANSLATION
import { useTranslation } from 'next-i18next'

function kontakt() {
  // eslint-disable-next-line
  const { t } = useTranslation("kontakt")
  return (
    <>
      <Heading title="Kontakt" />
      <div className="flex justify-between py-20 max-md:py-2 max-md:flex-col-reverse ">
        <div className="flex flex-col items-center w-[50%] max-md:w-auto">
          <Image src="/vistal-logo.jpg" width={150} height={50} />
          <div className="flex pt-5 gap-10">
            <a className="hover:scale-105 hover:bg-slate-500/50 p-2 rounded-md transition-all" href="https://www.google.com/maps/place/Rupni%C3%B3w+211,+34-652+Rupni%C3%B3w/@49.7696396,20.3357047,17z/data=!3m1!4b1!4m5!3m4!1s0x47161a4814e44949:0xfdb27ddbbb9b0876!8m2!3d49.7696396!4d20.3357047">             
              <img src="/svg/googlemaps.svg" alt="icon" />
            </a>
            <a className="hover:scale-105 hover:bg-slate-500/50 p-2 rounded-md transition-all" href="https://www.google.com/search?q=Vistal+gara%C5%BCe+blaszane&sxsrf=AJOqlzVk3d3vM8ST5QzMEOtstZPiw9WViw%3A1673871639449&ei=F0HFY8CMG4iJrwTsoIbgCQ&ved=0ahUKEwiA9N_jicz8AhWIxIsKHWyQAZwQ4dUDCA8&uact=5&oq=Vistal+gara%C5%BCe+blaszane&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QgAQQxwEQrwEQ6gQyAggmMhkILhCABBDHARCvARDqBBDcBBDeBBDgBBgBOgQIIxAnOgoILhDHARDRAxBDOhEILhCABBCxAxCDARDHARDRAzoECAAQQzoKCC4QxwEQrwEQQzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgoIABCxAxCDARBDOgoILhCvARDHARBDOg4ILhCABBCxAxDHARDRAzoFCAAQgAQ6CwguEIAEEMcBEK8BOggIABCxAxCDAToLCC4QgAQQxwEQ0QM6CwguEK8BEMcBEIAEOgsILhDHARDRAxCABDoGCAAQFhAeOg4ILhCvARDHARCABBDqBDoZCC4QrwEQxwEQgAQQ6gQQ3AQQ3gQQ4AQYAUoECEEYAEoECEYYAVAAWJ8zYIE1aABwAHgAgAGsAYgB9ROSAQQ0LjE4mAEAoAEBwAEB2gEGCAEQARgU&sclient=gws-wiz">
              <img src="/svg/GoogleIco.svg" alt="icon" />
            </a>
          </div>
          <div className="pt-10 relative ">
          <Image
            src="/images/map.png"
            width={300}
            height={279}            
          />
          <img src='/svg/bus.svg' className="car hover:scale-110 absolute bottom-[20px] right-[50px]" />
          <img src='/svg/house.svg' className="absolute hover:scale-150 bottom-6 right-[100px]" />
          </div>
          
        </div>
        <div className="text-white max-md:w-auto flex flex-col bg-slate-500 pt-10 pb-20 px-10 gap-7 items-center text-center w-[50%] shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold">Vistal</h1>
          <h2 className="text-4xl font-semibold">
            {t("producent")}
          </h2>
          <p>
           {t("text-kontakt")}
          </p>
          <div className="flex gap-20">
            <a href="tel:+48 693344132" className="p-1 flex flex-col items-center rounded-md hover:scale-110 hover:bg-slate-100/50">
              <img src="/svg/wphone.svg" alt="icon" className="w-16" />
              Kontakt: +48 693344132
            </a>
            <a href="mailto:kontakt@vistal-garaze-blaszane.pl" className="p-1 flex flex-col items-center rounded-md hover:scale-110 hover:bg-slate-100/50" >
              <img src="/svg/wmail.svg" alt="icon" className="w-16" />
              kontakt@vistal-garaze-blaszane.pl
            </a>
            <a href="https://www.facebook.com/VistalGaraze" className="p-1 rounded-md hover:scale-110 hover:bg-slate-100/50">
              <img src="/svg/wface.svg" alt="icon" className="w-16" />
            </a>
          </div>
          <div className="flex gap-20">
            <a href="tel:+48 538600019" className="p-1 flex flex-col items-center rounded-md hover:scale-110 hover:bg-slate-100/50">
              <img src="/svg/wphone.svg" alt="icon" className="w-16" />
              Sprzedaż: +48 538600019
            </a>
            <a href="mailto:sprzedaz@vistal-garaze-blaszane.pl" className="p-1 flex flex-col items-center rounded-md hover:scale-110 hover:bg-slate-100/50" >
              <img src="/svg/wmail.svg" alt="icon" className="w-16" />
              sprzedaz@vistal-garaze-blaszane.pl
            </a>
           
          </div>
        </div>
      </div>
    </>
  );
}

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
 
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer","menu","kontakt"],null,['pl','sk'])),  
    },
  
  };
};

export default kontakt;
