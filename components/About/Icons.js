import Image from "next/image";
import React from "react";
import { Bounce } from "react-awesome-reveal";
// TRANSLATION
import { useTranslation } from 'next-i18next'

function Icons() {
  const { t } = useTranslation("onas")
  return (
    <div className="flex flex-col items-center max-md:gap-10">
      <Bounce>
        <div className="flex flex-row items-center gap-[5vw] max-md:flex-col">
          <Image
            src="/svg/cash.svg"
            width={300}
            height={300}
            className="max-md:w-40"
          />
          <p className="max-w-md text-center font-semibold">
           {t("jestesmy-producent")}
          </p>
        </div>
      </Bounce>
      <Bounce>
        <div className="flex flex-row-reverse m-[-100px] max-md:m-0 max-md:flex-col items-center gap-[5vw]">
          <Image
            src="/svg/hammer.svg"
            width={300}
            height={300}
            className="max-md:w-40"
          />
          <p className="max-w-md text-center font-semibold">
            {t("odpowiednie-materialy")}
          </p>
        </div>
      </Bounce>

      <Bounce>
        <div className="flex flex-row  items-center max-md:m-0 max-md:flex-col gap-[5vw]">
          <Image
            src="/svg/car.svg"
            width={300}
            height={300}
            className="max-md:w-40"
          />
          <p className="max-w-md text-center font-semibold">
           {t("bezkonkurencyjne-ceny")}
          </p>
        </div>
      </Bounce>

      <Bounce>
        <div className="flex flex-row-reverse mt-[-50px] max-md:m-0 max-md:flex-col  items-center gap-[5vw]">
          <Image
            src="/svg/calendar.svg"
            width={300}
            height={300}
            className="max-md:w-40"
          />
          <p className="max-w-md text-center font-semibold">
          {t("terminowosc")}
          </p>
        </div>
      </Bounce>
    </div>
  );
}

export default Icons;
