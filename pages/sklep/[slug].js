import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";

function SingleGarage({ garage }) {

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
            {garage[0].acf.width} m
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center gap-5 text-xl font-semibold">
            <img src="/svg/height.svg" alt="icon" />
            {garage[0].acf.height} m
          </div>
        </Fade>
        <Fade>
          <div className="flex items-center gap-5 text-xl font-semibold">
            <img src="/svg/roof.svg" alt="icon" />
            {garage[0].acf.dach}
          </div>
        </Fade>

        {garage[0].acf.profil_zamkniety ? (
          <Fade>
            <div className="flex items-center gap-5 text-xl font-semibold">
              <img src="/svg/profil.svg" alt="icon" />
              profil zamknięty
            </div>
          </Fade>
        ) : null}

        <Fade>
          <div className="flex items-center max-w-xs gap-5 text-xl font-semibold">
            <img src="/svg/paint.svg" alt="icon" />
            {garage[0].acf.paint}
          </div>
        </Fade>

        <Fade>
          <div className="flex items-center  gap-5 text-xl font-semibold">
            <img src="/svg/gate.svg" alt="icon" />
            {garage[0].acf.rodzaj_bramy}
          </div>
        </Fade>

        {garage[0].acf.screw ? (
          <Fade>
            <div className="flex items-center gap-5 text-xl font-semibold">
              <img src="/svg/screw.svg" alt="icon" />
              nity pod kolor
            </div>
          </Fade>
        ) : null}
            {garage[0].acf.screw ?   (<Fade>
          <div className="flex max-w-xs items-center gap-5 text-xl font-semibold">
            <img src="/svg/shield.svg" alt="icon" />
            zabezpieczenie antykorozyjne
          </div>
        </Fade>):null}
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
          {garage[0].acf.obrazy.map((image) => (
            <SwiperSlide
              key={image.id}
              className="!w-[100%] !h-screen !max-sm:w-[50%]"
            >
              <Image
                alt={"garaz"}
                src={image.full_image_url}
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

export const getStaticProps = async ({ params }) => {
  const garage = await axios.get(
    `${process.env.WP_GARAGES}/?slug=${params.slug}`
  );

  return {
    props: {
      garage: garage.data,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  const response = await axios(process.env.WP_GARAGES);
  const paths = response.data.map((path) => ({ params: { slug: path.slug } }));

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: false,
  };
}

export default SingleGarage;
