import React from "react";
import Image from "next/image";
import Link from "next/link";

function Garage({ garage }) {
  const slug=garage.slug
  
  return (
    <div className=" shadow-lg lg:w-[52rem] max-md:w-[50vw] h-[150px] min-w-[350px] rounded-md flex justify-between items-center  bg-gray-500 ">
      {/* IMAGE */}
      <Link className="!w-[200px] min-w-[200px] max-sm:min-w-0  h-[150px] max-sm:min-w-40" href={`/sklep/${slug}`}>
        <Image
          src={garage.acf.obrazy[0].full_image_url}
          width={250}
          height={200}
          alt={garage.slug}
          className="rounded-l-md w-[250px] h-[150px] max-sm:max-w-[150px] hover:opacity-60 transition-all ease-in "
        />
      </Link>

      {/* NAZWA GARAŻU */}
      <div className="text-left pl-5 mr-auto text-white text-lg font-medium max-sm:text-sm">
        <h3>{garage.acf.tytul}</h3>
        <p className="text-sm pt-5 font-normal max-sm:hidden">{garage.acf.male_info}</p>
      </div>

      {/* CENA GARAZU  */}
      <div className="bg-red-700 h-full flex items-center ">
        <p className="text-2xl max-sm:text-sm font-bold text-white  text-center  md:w-[150px] px-5">
          {garage.acf.cena} zł
        </p>
      </div>

      <Link
        className="bg-yellow-300 text-center w-10 h-full rounded-r-md zamow cursor-pointer 
      text-lg font-bold hover: hover:w-10 transition-all ease-in-out"
        href="/zamów"
      >
        <div className="bg-yellow-300 w-8 h-full rounded-r-md zamow cursor-pointer text-lg font-bold hover:translate-x-2 hover:w-10 transition-all ease-in-out">
          Zamów
        </div>
      </Link>
    </div>
  );
}

export default Garage;
