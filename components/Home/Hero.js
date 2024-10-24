import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../store/reducers/products.reducer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

// TRANSLATION
import { useTranslation } from "next-i18next";

function Hero({ data,Products}) {
  const { t } = useTranslation("index");
  const { i18n } = useTranslation();

  console.log(i18n.language);

  const dispatch = useDispatch();
  const changeProduct = (name) => {
    dispatch(change(name));
  
  };

  const css = { width: "100%", height: "94vh", objectFit:"cover", objectPosition: "center"  };
  const drewnopodobne = data.acf.photo_gallery["slider-glowna"][0];



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
        <div className="absolute w-full text-slate-800 font-semibold top-0 left-0 z-10 max-sm:flex-col-reverse  flex flex-row justify-between !important ">
          <div className="bg-white/50 backdrop-blur-sm  shadow-xl rounded-r-xl basis-2/3 p-[65px] max-sm:p-5 lg:mt-[30vh]">
            <h1 className="text-[48px] max-sm:text-xl text-neutral-500 font-medium pb-5">
              {i18n.language === "pl" ? <>Garaże Blaszane i <span className="text-red-800 font-bold">Warstwowe</span></> : t("Garaże Blaszane")}
            
            </h1>
            <p
              className="text-2xl  max-sm:text-sm "
              style={{ whiteSpace: "pre-wrap" }}
            >
              {t("text-under")}
            </p>
            <a href="tel:+48 693344132" className="md:hidden">
              <button className="btn mt-10 text-black py-2 px-10 rounded-lg bg-white hover:scale-105 transition-all">
                {t("Zadzwoń")}
              </button>
            </a>
          </div>
          <div className="flex flex-col basis-1/3 font-normal items-end">
            <div className="mt-5 w-full text-black flex gap-7 p-6 rounded-l-lg bg-white">
              <Link
                href="https://www.skonfiguruj-garaz.pl/konfigurator/vistal"
                className="hover:scale-110 transition-all"
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <img className="animate-bounce" src="/svg/calculator.svg" />
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
            <div className="pt-[1%]  max-sm:hidden text-xl font-bold flex flex-col text-black gap-2">
              {Products.map((item, index) => (
                 <Slide direction="right" key={index}>
                 <Link  href={{
                  pathname:'/sklep'
                }} ><div onClick={()=>changeProduct(item)}
                   className="bg-white/50 transition-all p-2 cursor-pointer px-20 text-center rounded-l-lg hover:bg-red-700 hover:text-white"
                 >
                  {item}
                   {/* {t("item")} */}
                 </div>
                 </Link>
               </Slide>
              ))}
             
       
            </div>
          </div>
        </div>
        {drewnopodobne.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.full_image_url}
              style={css}
              width="1920"
              height="1080"
              className="img-fluid w-full h-full object-cover object-center  "
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
