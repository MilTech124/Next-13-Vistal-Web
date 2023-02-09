import React from 'react'
import Image from "next/image";

function Hero() {
  return (
    <div className="relative">
        <Image src="/o-nas.jpg" width={1286} height={657} alt="garaz-vistal" className="w-full max-md:h-[600px]"/>
        <div className="absolute text-center p-10 max-md:p-2 max-lg:p-2  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white bg-black/50 rounded-md">
          <h1 className="text-xl max-lg:text-sm font-bold">
            Vistal-producent garaży blaszanych
          </h1>
          <p className="w-[70vw] max-md:w-[90vw] pt-5 max-lg:text-sm">
            Firma VISTAL jest producentem nowoczesnych garaży blaszanych oraz
            innych konstrukcji stalowych charakteryzujących się estetycznym,
            eleganckim oraz nowoczesnym wykonaniem przy użyciu materiałów
            najwyższej jakości. Lata doświadczenia pozwoliły nam wypracować
            proces produkcyjny gwarantujący jakość i solidność naszych
            produktów. Konstrukcja wykonana z profili zamkniętych oraz
            najgrubszej blachy dostępna na rynku. Zajmujemy się produkcją garaży
            blaszanych, bram garażowych, hal, kojców, kiosków, pomieszczeń
            gospodarczych oraz innych konstrukcji metalowych.<br></br><br></br> Do każdego
            zamówienia podchodzimy indywidualnie. Klient ma możliwość
            dostosowania produktu dla własnych potrzeb i wymagań. Produkujemy
            garaże z blachy akrylowej, ocynkowanej oraz drewnopodobnej. Istnieje
            możliwość wyboru pomiędzy dachem jednospadowym (do tyłu, w przód lub
            na bok) lub z dachem dwuspadowym. Brama garażowa może być uchylna
            lub podnoszona do góry, a także z blachy z profilem szerokim z
            przetłoczeniami. Umożliwiamy szeroki wybór dodatków: otworów
            okiennych, drzwi wejściowych, orynnowania, kotwiczenia w podłożu i
            wielu innych. Cena garażu lub wybranej konstrukcji uzależniona jest
            od rozmiaru, wybranej blachy oraz dodatkowych parametrów.
          </p>
        </div>
        
      </div>
  )
}

export default Hero