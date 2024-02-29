import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

function Akcesoria() {
  const bramy= [
    {
      name: "Bramy Segmentowe",
      description: "Bramy segmentowe to nowoczesne rozwiązanie w dziedzinie bram garażowych, które zyskuje coraz większą popularność. Składają się z poziomych paneli, które są połączone ze sobą za pomocą zawiasów. Dzięki temu konstrukcja bramy może płynnie podnosić się i opuszczać, zajmując minimalną przestrzeń. Bramy segmentowe są wygodne w użytkowaniu i charakteryzują się estetycznym wyglądem, co sprawia, że są popularnym wyborem dla wielu właścicieli domów.",
      image: "/images/akcesoria/brama.webp",
    },
    {
      name: "Bramy Uchylne",
      description: "Bramy uchylne, znane również jako bramy skrzydłowe, to klasyczne rozwiązanie, które od dawna jest stosowane w garażach na całym świecie. Składają się z dwóch skrzydeł, które otwierają się na zewnątrz lub do środka w zależności od konstrukcji. Bramy uchylne są proste w budowie i mają solidną konstrukcję, co sprawia, że są trwałym rozwiązaniem. Pomimo swojej tradycyjnej formy, nadal są popularnym wyborem dla tych, którzy cenią sobie prostotę i niezawodność.",
      image: "/images/akcesoria/uchylna.webp",
    },
    {
      name: "Bramy Otwierane",
      description: "Bramy otwierane, czasem nazywane bramami przesuwnymi, to kolejny rodzaj bram, które są szeroko stosowane w różnych miejscach, w tym w garażach. Bramy te przesuwają się na boki, pozwalając na otwarcie dostępu do garażu. Są idealne dla tych, którzy mają ograniczoną przestrzeń nad garażem, ponieważ nie wymagają dużego obszaru wolnego przestrzeni przed garażem. Bramy otwierane są także łatwe w obsłudze i mogą być dostosowane do różnych rozmiarów i kształtów garażu.",
      image: "/images/akcesoria/na boki.webp",
    },    
  ]
  const door=[
    {
      name: "Drzwi",
      description: "Dodatkowe drzwi garażowe stanowią praktyczne rozwiązanie, które wprowadza dodatkową funkcjonalność do użytkowania garażu. Te drzwi są wyposażone w zamek z dwoma kluczami, co zapewnia dodatkowy poziom bezpieczeństwa dla Twojego garażu i jego zawartości. Montowane mogą być na dowolnej ścianie garażu, co daje elastyczność w dostępie do wnętrza.",
      image: "/images/akcesoria/drzwi.webp",
    },
  ]

  const window=[
    {
      name: "Okno",
      description: "Okna garażowe to praktyczne rozwiązanie, które wprowadza dodatkowe światło do wnętrza garażu. Wymiar 60x80 cm lub 60x100 , dostępne w róznych kolorach. Okna te są wykonane z wytrzymałego tworzywa sztucznego PCV, które jest odporne na uszkodzenia mechaniczne i warunki atmosferyczne. Dzięki temu okna garażowe są trwałym rozwiązaniem, które zapewnia dodatkowe oświetlenie i wentylację w garażu.",
      image: "/images/akcesoria/okno.webp",
    },
  ]
  const okucia=[
    {
      name: "Okucia",
      description: "Okucia garażowe stanowią nieodłączny element obróbki blacharskiej każdego garażu. Zapewniają nie tylko funkcjonalność i bezpieczeństwo, ale również estetyczny wygląd. Wszystkie okucia garażowe są wykonane z wysokiej jakości materiałów, które są odporne na korozję i uszkodzenia mechaniczne. Dzięki temu są trwałym rozwiązaniem, które zapewnia długotrwałą ochronę dla Twojego garażu.",
      image: "/images/akcesoria/okucia.webp",
    },  
  ]

  const rynny=[
    {
      name: "Rynny",
      description: "Rynny garażowe to praktyczne rozwiązanie, które zapewnia skuteczną ochronę przed nadmiernym zalewaniem wodą. Rynny te są wykonane z wytrzymałego tworzywa sztucznego PCV, które jest odporne na korozję i uszkodzenia mechaniczne. Dzięki temu rynny garażowe są trwałym rozwiązaniem, które zapewnia długotrwałą ochronę dla Twojego garażu.",
      image: "/images/akcesoria/rynna.webp",
    },
  ]

  const nity=[
    {
      name: "Nity",
      description: "Nity są niezwykle istotnym elementem w konstrukcji garażu, zapewniającym trwałość i wytrzymałość. Teraz możemy dostosować nawet najmniejsze detale do Twojego gustu, oferując nity w szerokiej gamie kolorów, dopasowanych idealnie do koloru Twojego garażu.",
      image: "/images/akcesoria/nity.webp",
    },
  ]

  const automatyka=[
    {
      name: "Automatyka",
      description: "Automatyzacja bram garażowych to praktyczne rozwiązanie, które zapewnia wygodę i bezpieczeństwo w użytkowaniu garażu. Dzięki zastosowaniu automatyki, bramy garażowe mogą być otwierane i zamykane za pomocą pilota, co jest wygodne i oszczędza czas.",
      image: "/images/akcesoria/automatyka.webp",
    },
  ]
  const filc=[
    {
      name: "Filc antykondensacyjny",
      description: "Filc zwany także przeciwskroplinom to niezastąpiony element w każdym garażu, który zapewnia skuteczną ochronę przed wilgocią i korozją. Dzięki swoim właściwościom, filc antykondensacyjny pomaga utrzymać odpowiedni poziom wilgotności wewnątrz garażu, co przeciwdziała powstawaniu kondensacji i osadzaniu się wilgoci na powierzchniach metalowych.",
      image: "/images/akcesoria/filc.webp",
    },
  ]
  const poszycie=[
    {
      name:"Drewnopodobne",
      description:"Drewnopodobne poszycie garażu to popularne rozwiązanie dla tych, którzy pragną tradycyjnego wyglądu drewna, bez jego wad. Dzięki nowoczesnym materiałom, takie poszycie jest trwałe, łatwe w utrzymaniu i odporne na warunki atmosferyczne.",
      image: "/images/akcesoria/drewno.jpg",
    },
    {
      name:"Akrylowe",
      description:"Akrylowe poszycie garażu to nowoczesne rozwiązanie, które zapewnia estetyczny wygląd i trwałość. Dzięki powłoce farby akrylowej, poszycie jest odporne na korozję i uszkodzenia mechaniczne, co sprawia, że jest trwałym rozwiązaniem.",
      image: "/images/akcesoria/akryl.jpg",
    },
    {
      name:"Ocynkowe",
      description:"Ocynkowe poszycie garażu to praktyczne rozwiązanie, które zapewnia skuteczną ochronę przed korozją. Dzięki zastosowaniu ocynku, poszycie jest odporne na rdzę i uszkodzenia mechaniczne, co sprawia, że jest trwałym rozwiązaniem.",
      image: "/images/akcesoria/ocynk.webp",
    },
    {
      name:"Z płyty warstwowej",
      description:"Poszycie z płyty warstwowej PIR to nowoczesne rozwiązanie, które zapewnia doskonałą izolację termiczną i akustyczną. Wykonane z wysokiej jakości materiałów, takie poszycie zapewnia optymalne warunki wewnątrz garażu, chroniąc przed utratą ciepła i hałasem z zewnątrz.",
      image: "/images/akcesoria/plyta.jpeg",
    }
  ]

  const [current,setCurrent] = useState('')
  const [variable, setVariable] = useState(0.4166)
  



      useEffect(() => {
        if (typeof window !== "undefined") {
          if (window.innerWidth <= 800) {
            setVariable(0.1822);   
          } else {         
            setVariable(0.4166);
          }
        }
      }, []);


 

  ; // Set the value according to your needs


  const handleClick = (e) => {
    console.log(e.target.getAttribute('name'))
    setCurrent(e.target.getAttribute('name'))
    const element = document.getElementById(e.target.getAttribute('name'));
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}





  return (
    <div className="mx-auto pt-4 ">
      {/* <div className="w-full flex justify-center gap-5 p-5 bg-slate-100">
        <button className=" py-2 px-5 bg-red-700 rounded-lg text-white font-semibold">
          Akcesoria
        </button>
        <button className=" py-2 px-5 bg-red-700 rounded-lg text-white font-semibold">
          Dane Techniczne
        </button>
      </div> */}

      <div>
        <h1 className="text-4xl text-center pt-5 font-bold">
          Akcesoria do garaży
        </h1>
        <p className="text-center text-xl mx-auto py-2 max-w-2xl">
          Firma VISTAL jest producentem nowoczesnych garaży blaszanych oraz
          innych konstrukcji stalowych charakteryzujących się
          estetycznym,eleganckim oraz nowoczesnym wykonaniem przy użyciu
          materiałów najwyższej jakości.
        </p>
        <h2 className="text-xl text-center font-light">Kliknij na element garażu, aby zobaczyć więcej informacji</h2>

        <div className="flex justify-center md:-mt-40">
          <div className="md:w-[800px] w-[350px] relative">
            <img src="/images/akcesoria/caly-garaz.webp"  usemap="#imagemap"/>
            <svg className='w-full h-full' style={{position: 'absolute', top: 0, left: 0, opacity: 0.5}}>          
              <polygon onClick={handleClick} name="brama" points={`${1061 * variable},${654 * variable} ${1778 * variable},${773 * variable} ${1773 * variable},${1232 * variable} ${1054 * variable},${1448 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="drzwi" points={`${829 * variable},${1456 * variable} ${837 * variable},${665 * variable} ${603 * variable},${694 * variable} ${586 * variable},${1383 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />           
              <polygon onClick={handleClick} name="obrobka" points={`${983 * variable},${1447 * variable} ${995 * variable},${543 * variable} ${1526 * variable},${492 * variable} ${1802 * variable},${721 * variable} ${1819 * variable},${709 * variable} ${1543 * variable},${473 * variable} ${983 * variable},${519 * variable} ${36 * variable},${691 * variable} ${36 * variable},${704 * variable} ${927 * variable},${551 * variable} ${925 * variable},${1434 * variable} ${847 * variable},${1415 * variable} ${842 * variable},${1468 * variable} ${959 * variable},${1503 * variable} ${1051 * variable},${1481 * variable} ${1047 * variable},${1429 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="obrobka" points={`${976 * variable},${511 * variable} ${1592 * variable},${460 * variable} ${1887 * variable},${730 * variable} ${1904 * variable},${709 * variable} ${1599 * variable},${419 * variable} ${964 * variable},${446 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="orynnowanie" points={`${6 * variable},${663 * variable} ${959 * variable},${441 * variable} ${966 * variable},${494 * variable} ${11 * variable},${696 * variable} ${6 * variable},${748 * variable} ${30 * variable},${775 * variable} ${43 * variable},${835 * variable} ${31 * variable},${1169 * variable} ${6 * variable},${1189 * variable} ${8 * variable},${1159 * variable} ${18 * variable},${791 * variable} ${4 * variable},${772 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="fundament" points={`${1 * variable},${1201 * variable} ${944 * variable},${1505 * variable} ${1493 * variable},${1323 * variable} ${1782 * variable},${1237 * variable} ${1799 * variable},${1264 * variable} ${1117 * variable},${1503 * variable} ${123 * variable},${1508 * variable} ${3 * variable},${1449 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="drzwi2" points={`${589 * variable},${1381 * variable} ${601 * variable},${684 * variable} ${834 * variable},${660 * variable} ${830 * variable},${1449 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="poszycie" points={`${990 * variable},${1438 * variable} ${1000 * variable},${549 * variable} ${1524 * variable},${496 * variable} ${1802 * variable},${727 * variable} ${1804 * variable},${1195 * variable} ${1785 * variable},${1201 * variable} ${1787 * variable},${758 * variable} ${1054 * variable},${627 * variable} ${1041 * variable},${1430 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="poszycie" points={`${920 * variable},${1432 * variable} ${924 * variable},${556 * variable} ${52 * variable},${707 * variable} ${45 * variable},${1171 * variable} ${581 * variable},${1337 * variable} ${596 * variable},${680 * variable} ${847 * variable},${657 * variable} ${844 * variable},${1408 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
              <polygon onClick={handleClick} name="okno" points={`${269 * variable},${979 * variable} ${269 * variable},${730 * variable} ${160 * variable},${741 * variable} ${157 * variable},${972 * variable}`} fill="transparent" onMouseOver={(e) => e.target.style.fill = 'red'} onMouseOut={(e) => e.target.style.fill = 'transparent'} />
            </svg>
          </div>          
        </div>
        <div>
        <div class="p-4">
        <h2 id="poszycie" className="text-6xl text-center font-bold">Rodzaj garażu</h2>
        {poszycie.map((item) => (
          <div>   
                  <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-left font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
          </div>
          </div>
        ))}


        <h2 id="brama" className="text-6xl text-center font-bold">Bramy</h2>
        {bramy.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-right font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
              
              <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
          </div>
          
        </div>
        ))}

        <h2 id="drzwi2" className="text-6xl text-center font-bold">Drzwi</h2>
        {door.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-left font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
              
              
          </div>
          </div>
        ))}


        <h2 id="okno" className="text-6xl text-center font-bold">Okno</h2>
        {window.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-right font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
          </div>

          </div>
        ))}

        <h2 id="obrobka" className="text-6xl text-center font-bold">Okucia</h2>
        {okucia.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-left font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
              
              
          </div>
          </div>
        ))}

        <h2 id="orynnowanie" className="text-6xl text-center font-bold">Rynny</h2>
        {rynny.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-right font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
          </div>
          </div>
        ))}

        <h2 className="text-6xl text-center font-bold">Nity</h2>
        {nity.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-left font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
              
              
          </div>
          </div>
        ))}

        <h2 className="text-6xl text-center font-bold">Automatyka</h2>
        {automatyka.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-right font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
          </div>
          </div>
        ))}

        <h2 className="text-6xl text-center font-bold">Filc</h2>
        {filc.map((item) => (
          <div>   
                 
            <div className="flex max-md:flex-wrap-reverse items-center justify-evenly"> 
            <Image src={item.image} width={400} height={400} className="max-w-[400px] border-2 shadow-2xl drop-shadow-2xl  "/>
            <div className="mb-4 max-w-xl max-sm:text-sm">
              <h3 class="text-xl text-left font-bold mb-4">{item.name}</h3>             
              <p class="">{item.description}</p>
            </div>
              
              
          </div>
          </div>
        ))}

        
        

         
  
</div>

        </div>
      </div>
    </div>
  );
}

export default Akcesoria;
