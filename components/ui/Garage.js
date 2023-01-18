import React from "react";
import Image from "next/image";
import Link from "next/link";

function Garage({ garage }) {
  const { image, title, text, prize,id, } = garage;
  return (
    <div className=" shadow-lg lg:w-[52rem] max-md:w-[50vw] h-[150px] min-w-[350px] rounded-md flex justify-between items-center  bg-gray-500 ">
      {/* IMAGE */}
      <Link className="w-[250px] h-[150px] max-sm:w-40" href="/sklep/{id}">
        <Image
          src={image}
          width={250}
          height={200}
          alt="garage"
          className="rounded-l-md w-[250px] h-[150px] max-sm:max-w-[150px] hover:opacity-60 transition-all ease-in "
        />
      </Link>

      {/* NAZWA GARAŻU */}
      <div className="text-left pl-5 mr-auto text-white text-lg font-medium max-sm:text-sm">
        <h3>{title}</h3>
        <p className="text-sm pt-5 font-normal">{text}</p>
      </div>

      {/* CENA GARAZU  */}
      <div className="bg-red-700 h-full flex items-center ">
        <p className="text-2xl max-sm:text-sm font-bold text-white  text-center  md:w-[150px] px-5">
          {prize} zł
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
