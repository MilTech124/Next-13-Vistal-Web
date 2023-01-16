import Image from "next/image";
import React from "react";

function ColorsOfGarage() {
  return (
    <section id="colors-of-garage" className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-red-700 py-5">Kolory garaży blaszanych</h2>
      <p>
        Różne odcienie brązu, wiśni, grafitu, srebrnego, bieli, czerni czy
        szarości powinny przypaść do gustu osobom ceniącym klasyczny design. W
        palecie dostępne są również bardziej wyraziste barwy – np. zielony,
        żółty, niebieski, głęboka czerwień, piaskowy. Dzięki temu kolory garaży
        blaszanych z powodzeniem można dopasować np. do elewacji domu lub innych
        budynków znajdujących się na działce, koloru ogrodzenia oraz elementów
        architektury ogrodowej.
      </p>
      <Image
      src='/colors.jpg'
      width={896}
      height={387}
      className='mx-auto py-5'
      alt="kolory garazy"
      priority
      />
    </section>
  );
}

export default ColorsOfGarage;
