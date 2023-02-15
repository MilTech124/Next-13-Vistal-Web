import React from 'react'
import Image from "next/image";
// TRANSLATION
import { useTranslation } from 'next-i18next'

function Hero() {
  const { t } = useTranslation("onas")
  return (
    <div className="relative">
        <Image src="/o-nas.jpg" width={1286} height={657} alt="garaz-vistal" className="w-full max-md:h-[600px]"/>
        <div className="absolute text-center p-10 max-md:p-2 max-lg:p-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white bg-black/50 rounded-md">
          <h1 className="text-xl max-lg:text-sm font-bold">
           {t("firma")}
          </h1>
          <p className="w-[70vw] max-md:w-[90vw] pt-5 max-lg:text-sm" style={{ whiteSpace: 'pre-wrap' }}>
         {t("firma-text")}
          </p>
        </div>
        
      </div>
  )
}

export default Hero