import Image from "next/image";
import React from "react";
import { Fade} from "react-awesome-reveal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function SingleGarage() {
  const data = {
    width: "6",
    height: "5.8",
    roof: "dwuspadowy",
    profil: "profil zamkniety",
    paint: "akrylowa dostepna w wielu wariantach",
    gate: "brama uchylna",
    screw: "nity pod kolor",
    shield: "zabezpieczenie antykorozyjne",
  };
  const images = ["/images/3x5x5300/1.jpeg", "/images/3x5x5300/2.jpeg"];

  return (
    <section className="flex max-sm:flex-col-reverse">
      {/* ICONS LEFT SIDE */}
      <div className="p-10 flex flex-col basis-1/3 gap-10 ">
        <Fade>
          {" "}
          <Image className="" src="/vistal-logo.jpg" width={150} height={50} />
        </Fade>
        <Fade>
          {" "}
          <div className="flex items-center gap-5 text-xl font-semibold">
            <img src="/svg/width.svg" alt="icon" />
            {data.width} m
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center gap-5 text-xl font-semibold">
            <img src="/svg/height.svg" alt="icon" />
            {data.height} m
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center gap-5 text-xl font-semibold">
            <img src="/svg/profil.svg" alt="icon" />
            {data.profil}
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center max-w-xs gap-5 text-xl font-semibold">
            <img src="/svg/paint.svg" alt="icon" />
            {data.paint}
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center  gap-5 text-xl font-semibold">
            <img src="/svg/gate.svg" alt="icon" />
            {data.gate}
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center gap-5 text-xl font-semibold">
            <img src="/svg/screw.svg" alt="icon" />
            {data.screw}
          </div>
        </Fade>

        <Fade>
          <div className="flex max-w-xs items-center gap-5 text-xl font-semibold">
            <img src="/svg/shield.svg" alt="icon" />
            {data.shield}
          </div>
        </Fade>
      </div>
      {/* ICONS LEFT SIDE */}
      {/*CENTER BELT */}
      <div className="flex basis-0">
        <div className="h-full w-4 bg-slate-500 shadow-lg"></div>
        <div className="h-full w-5 bg-red-700 shadow-lg"></div>
      </div>
      <div className="max-sm:h-[50vh] relative">
        <Swiper
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide
              key={image}
              className="!w-[100%] !h-screen !max-sm:w-[50%]"
            >
              <Image
                alt={"garaz"}
                src={image}
                width={1024}
                height={798}
                className="w-full h-full max-sm:h-[50%] object-center object-cover"
              />
            </SwiperSlide>
          ))}
          <button
            className="text-3xl font-bold z-10 absolute bottom-[10%] right-[10%] py-5 px-[10%] max-sm:bottom-auto max-sm:top-5  text-white rounded-xl bg-red-700 
                             hover:bg-yellow-500 "
          >
            Zamów
          </button>
        </Swiper>
      </div>
    </section>
  );
}

export default SingleGarage;
