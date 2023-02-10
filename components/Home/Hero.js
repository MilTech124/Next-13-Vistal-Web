import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Slide } from "react-awesome-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState } from "react";
import Link from "next/link";

// TRANSLATION
import { useTranslation } from 'next-i18next'



function Hero({ data }) {

  const { t } = useTranslation("index")

  const css = { width: "100%", height: "94vh", objectFit: "cover" };
  const ocynkowe = data.acf.photo_gallery["ocynkowe-glowna"][2];
  const akrylowe = data.acf.photo_gallery["akrylowe-glowna"][1];
  const drewnopodobne = data.acf.photo_gallery["drewnopodobne-glowna"][0];
  const kojce = data.acf.photo_gallery["kojce-glowna"][3];

  const [chosed, setChosed] = useState(drewnopodobne);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper relative max-sm:h-[70vh]"
      >
        <div className="absolute w-full text-white font-bold top-0 left-0 z-10 max-sm:flex-col-reverse  flex flex-row justify-between !important ">
          <div className="bg-black/50 shadow-xl rounded-r-xl basis-2/3 p-[65px] max-sm:p-5 lg:mt-[30vh]">
            <h1 className="text-[64px] max-sm:text-xl pb-5">{t("Garaże Blaszane")}</h1>
            <p className="text-2xl max-sm:text-sm ">
             {t("text-under")}
            </p>
            <a href="tel:+48 693 344 132">
              <button className="btn mt-10 text-black py-2 px-10 rounded-lg bg-white hover:scale-105 transition-all">
                {t("Zadzwoń")}
              </button>
            </a>
          </div>
          <div className="flex flex-col basis-1/3 font-normal items-end">
            <div className="mt-5 w-full text-black flex gap-7 p-6 rounded-l-lg bg-white">
              <Link
                href="/konfigurator"
                className="hover:scale-110 transition-all"
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <img src="/svg/calculator.svg" />
                  {t("Konfigurator")}
                </div>
              </Link>
              <Link href="/sklep" className="hover:scale-110 transition-all">
                <div className="flex items-center gap-1 cursor-pointer">
                  <img src="/svg/shop.svg" />
                  {t("Sklep")}
                </div>
              </Link>
            </div>
            <div className="pt-[20%]  max-sm:hidden text-xl font-bold flex flex-col text-black gap-5">
              <Slide direction="right">
                <div
                  onClick={() => setChosed(drewnopodobne)}
                  className="bg-white/50 transition-all p-10 cursor-pointer px-20 text-center rounded-l-lg hover:bg-red-700 hover:text-white"
                  style={
                    chosed == drewnopodobne ? { backgroundColor: "grey" } : null
                  }
                >
                  {t("Drewnopodobne")}
                </div>
              </Slide>
              <Slide direction="right">
                <div
                  onClick={() => setChosed(akrylowe)}
                  className="bg-white/50 transition-all p-10 px-20 cursor-pointer text-center rounded-l-lg hover:bg-red-700 hover:text-white"
                  style={
                    chosed == akrylowe ? { backgroundColor: "grey" } : null
                  }
                >
                  {t("Aktylowe")}
                </div>
              </Slide>
              <Slide direction="right">
                <div
                  onClick={() => setChosed(ocynkowe)}
                  className="bg-white/50 transition-all p-10 px-20 cursor-pointer text-center rounded-l-lg hover:bg-red-700 hover:text-white"
                  style={
                    chosed == ocynkowe ? { backgroundColor: "grey" } : null
                  }
                >
                  {t("Ocynkowe")}
                </div>
              </Slide>
              <Slide direction="right">
                <div
                  onClick={() => setChosed(kojce)}
                  className="bg-white/50 p-10 px-20 cursor-pointer text-center rounded-l-lg transition-all hover:bg-red-700 hover:text-white"
                  style={chosed == kojce ? { backgroundColor: "grey" } : null}
                >
                  {t("Kojce")}
                </div>
              </Slide>
            </div>
          </div>
        </div>
        {chosed.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.full_image_url}
              style={css}
              width="960"
              height="720"
              className="img-fluid"
              alt={item.id}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Hero;
