import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { Fade, Bounce } from "react-awesome-reveal";

function WhyVistal() {
  return (
    <div id="whyVistal" className=" mx-auto container">
      <Fade className="flex-1">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-red-700 pt-10 font-bold">Vistal</h2>
          <h3 className="text-2xl  font-semibold text-center">
            Producent Garaży
          </h3>
          <p className="text-center text-xl  max-w-[1240px]">
            Firma VISTAL jest producentem nowoczesnych garaży blaszanych oraz
            innych konstrukcji stalowych charakteryzujących się
            estetycznym,eleganckim oraz nowoczesnym wykonaniem przy użyciu
            materiałów najwyższej jakości.
          </p>
        </div>
      </Fade>
      <div className="flex-1 m-auto md:flex md:gap-5 justify-center py-5 max-w-[1240px]">
        <Fade delay={500}>
          {" "}
          <Image
            width={800}
            height={556}
            className="max-w-[600px] max-sm:max-w-[90vw] m-auto border-2 shadow-2xl drop-shadow-2xl basis-1/2"
            src="/svg/konfigurator.png"
          />
        </Fade>
        <Fade delay={300}>
          <div className="basis-1/2 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-center  py-2">
              Konfigurator Garażu
            </h3>
            <p className="max-w-3xl">
              Niezależnie od tego, czy potrzebujesz miejsca do przechowywania
              samochodu, motocykla czy zestawu narzędzi, nasz konfigurator
              umożliwi Ci spersonalizowanie każdego detalu. Wybierz rozmiar,
              kształt, materiał i wiele innych opcji, aby stworzyć garaż, który
              spełni wszystkie Twoje oczekiwania
            </p>
            <Bounce>
              {" "}
              <Button variant="contained" className="bg-red-700 mt-5">
                <Link href="/konfigurator">Konfigurator</Link>
              </Button>
            </Bounce>
          </div>
        </Fade>
      </div>
      <div className="flex-1 md:flex items-center gap-5 justify-center -mt-14 pb-5">
        <Fade delay={500} className="max-w-[60%] ">
          <Image
            width={1200}
            height={800}
            className=" max-sm:max-w-[90vw]"
            src="/images/garaz_glowna.webp"
          />
        </Fade>
        <Fade delay={300} className="basis-1/3">
          <div className="basis-1/2 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-center py-2">
              Akcesoria do garaży
            </h3>
            <h4 className="text-xl ">oraz dane techniczne</h4>
            <p className="py-2">
              Odkryj nasze akcesoria dla garaży. Solidne materiały gwarantują
              bezpieczeństwo Twoich narzędzi i sprzętów. Skorzystaj również z
              naszych takich jak
              <b> drzwi, okna, bramy,</b> czy też <b>automatyka bram</b>.
            </p>

            {/* <Bounce>
              <Button variant="contained" className="bg-red-700 mt-5">
                <Link href="/akcesoria">Więcej informacji</Link>
              </Button>
            </Bounce> */}
          </div>
        </Fade>
      </div>
    
    </div>
  );
}

export default WhyVistal;
