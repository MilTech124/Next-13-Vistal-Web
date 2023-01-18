import Image from "next/image";
import React from "react";
import { Fade, Bounce } from "react-awesome-reveal";

function Icons() {
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
            Jesteśmy producentem kupując prosto od nas pomijasz sklepy oraz ich
            prowizje przez co nasze produkty są w bezkonkurencyjnej cenie.
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
            Odpowiednie dobrane materiały oraz profesjonalnie wykonany montaż są
            składowymi solidnego wykonania jakie świadczymy dla Was.
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
            Jesteśmy producentem kupując prosto od nas pomijasz sklepy oraz ich
            prowizje przez co nasze produkty są w bezkonkurencyjnej cenie.
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
            Wszystkie nasze zlecenia wykonujemy w terminie aby klient był
            zadowolony z nowego nabytku.
          </p>
        </div>
      </Bounce>
    </div>
  );
}

export default Icons;
