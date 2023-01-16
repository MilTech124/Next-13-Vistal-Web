import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function MakeGround() {
  const css = { width: "100%", height: "94vh", objectFit: "cover" };
  const fundamental = [
    {
      img:'/images/fundamenty1.png',
      list:
          <ol className="text-left pt-5">
            <h3 className="text-xl font-bold">Fundament</h3>
            <li>1.Rysujemy na ziemi linie obrysu naszego garażu, czyli miejsce w którym będzie stał przyszły garaż</li>
            <li>2.Następnie należy wykopać rów o szerokości 20 cm i głębokości 30 cm wzdłuż linii obrysu.</li>
            <li>3.Fundament powinien wystawać po 10 cm z każdej strony od linii obrysu.</li>
            <li>4.Zalewamy rów betonem</li>
            <li>5.Gdy beton stężeje, mamy gotowy fundament pod garaż.</li>
          </ol> 
    },
    {
      img:'/images/bloczki.jpg',
      list:
          <ol className="text-left pt-5">
            <h3 className="text-xl font-bold">Bloczki betonowe</h3>
            <li>1. Układamy je wzdłuż linii obrysu naszego garażu.</li>
            <li>2. Ile bloczków? Minimum 4 – po jednym w każdym rogu, ale im więcej tym pewniej i stabilniej będzie stał nasz garaż. Przy większych konstrukcjach wskazana jest większa ilość bloczków.</li>
            <li>3. Pamiętaj by wypoziomować bloczki betonowe.</li>
            <li>4. Środek garażu można zasypać grysem, żwirem, gruzem itd.</li>
          </ol> 
    },
    {
      img:'/images/wylewka.jpg',
      list:
      <ol className="text-left pt-5">
      <h3 className="text-xl font-bold">Wylewka betonowa</h3>
      <li>Solidnym oraz bezpiecznym, rozwiązaniem jest wylewka betonowa</li>
      <li>Wylewka powinna być większa minimum o 20 cm na szerokość i długość od wymiarów zamawianego garażu.</li>
      
    </ol>  
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
      <div className="text-center text-black basis-3/5 pt-5 px-5 ">
        <h3 className="text-xl font-bold">Przygotowanie podłoża</h3>
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
          {fundamental.map((item,index) => (
            <SwiperSlide key={index}>
              <Image src={item.img} width="300" height="169" alt="image" className=" m-auto" />
              
              {item.list}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MakeGround;
