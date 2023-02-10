import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Slide } from "react-awesome-reveal";

// TRANSLATION
import { useTranslation } from "next-i18next";

function MakeGround() {
  const { t } = useTranslation("index");
  const css = { width: "100%", height: "94vh", objectFit: "cover" };
  const fundamental = [
    {
      img: "/images/fundamenty1.png",
      list: (
        <ol className="text-left pt-5">
          <h3 className="text-xl font-bold">{t("Fundament")}</h3>
          <li>{t("pt1")}</li>
          <li>{t("pt2")}</li>
          <li>{t("pt3")}</li>
          <li>{t("pt4")}</li>
          <li>{t("pt5")}</li>
        </ol>
      ),
    },
    {
      img: "/images/bloczki.jpg",
      list: (
        <ol className="text-left pt-5">
          <h3 className="text-xl font-bold">{t("Bloczki betonowe")}</h3>
          <li>{t("pb1")}</li>
          <li>{t("pb2")}</li>
          <li>{t("pb3")} </li>
          <li>{t("pb4")} </li>
        </ol>
      ),
    },
    {
      img: "/images/wylewka.jpg",
      list: (
        <ol className="text-left pt-5">
          <h3 className="text-xl font-bold">{t("Wylewka betonowa")}</h3>
          <li>{t("pw1")}</li>
          <li>{t("pw2")}</li>
        </ol>
      ),
    },
  ];

  return (
    <section id="make-ground" className="flex max-sm:flex-col pt-10  gap-10">
      <div className=" basis-2/5">
        <Image
          src="/images/builder.png"
          width="443"
          height="664"
          alt="builder"
          className="max-sm:w-[250px] m-auto"
          priority
        />
      </div>
      <Slide direction="right" cascade damping={0.1} className="basis-3/5">
        <div className="text-center text-black  pt-5 px-5 ">
          <h3 className="text-xl font-bold">{t("Przygotowanie podłoża")}</h3>
          <p className="pt-10 pb-5">
            Przygotowanie podłoża pod garaż leży po stronie klienta. W celu
            ułatwienia Państwu prawidłowego przygotowania poniżej przedstawiamy
            schemat różnych sposobów jego przygotowania,które gwarantuje dobre
            użytkowanie garażu przez wiele lat.
          </p>

          <Swiper
            centeredSlides={false}
            autoplay={{
              delay: 7500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper relative lg:max-w-[40vw] max-w-[100vw] "
          >
            {fundamental.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.img}
                  width="300"
                  height="169"
                  alt="image"
                  className=" m-auto"
                />

                {item.list}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Slide>
    </section>
  );
}

export default MakeGround;
