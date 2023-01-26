/* eslint-disable */
import React from "react";
import Heading from "../components/ui/Heading";
import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

function wycena() {
  const router = useRouter();
  const form = useRef();
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    roof: "Jednospadowy",
    paint: "Akrylowa",
    tiles: "Trapezowa",
    gate: "Uchylna",
    door: "Nie",
    window: "Nie",
    name: "",
    surname: "",
    email: "",
    area: "",
  });  

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    
    emailjs
      .sendForm(
        "service_3j3n0o7",
        "template_7p1w20q",
        form.current,
        "oQq1UWWWHKs-7vYwK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Pomyslnie wysłano");
    router.push("/");
  };

  return (
    <>
      <Heading title={"Indywidualna Wycena"} />

      <p className="p-10 max-sm:p2 text-lg">
        Serdecznie zapraszamy do kontaktu i skorzystania z bezpłatnej wyceny.
        Oferujemy garaże blaszane standardowe oraz na zyczenie klienta.
        wykonujemy garaże w dowolnej konfiguracji tzn. dowolna szerokość,
        długość, rodzaj dachu, kolor poszczególnych elementów, ilość bram
        garażowych, rodzaj itp...
        <br></br> Zapraszam do skorzystania z poniższego mini konfriguratora
        oraz przesłanie informacji.
      </p>
      <form
        onSubmit={onSubmit}
        ref={form}
        className=" pb-10 flex flex-col items-center"
      >
        <div className="flex max-md:flex-col ">
          {/* ITEMS */}
          <div className="flex basis-3/5 gap-5 px-10 flex-wrap">
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/width.svg" width="75px" alt="icon" />{" "}
                <input
                  required
                  type="text"
                  id="width"
                  name="width"
                  className="border-solid text-center border-2 border-black w-[120px] rounded-md py-2 px-5"
                  placeholder="Szerokość"
                  onChange={onChange}
                ></input>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/height.svg" width="75px" alt="icon" />{" "}
                <input
                  required
                  type="text"
                  id="height"
                  name="height"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  placeholder="Długość"
                  onChange={onChange}
                ></input>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/roof.svg" width="75px" alt="icon" />{" "}
                <select
                  required
                  type="text"
                  id="roof"
                  name="roof"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  placeholder="Szerokość"
                  onChange={onChange}
                >
                  <option>Jednospadowy</option>
                  <option>Dwuspadowy</option>
                </select>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/paint.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="paint"
                  name="paint"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}
                >
                  <option>Akrylowa</option>
                  <option>Drewnopodobny</option>
                  <option>Ocynk</option>
                </select>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/tiles.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="tiles"
                  name="tiles"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}
                >
                  <option>Trapezowa</option>
                  <option>Blachodachówka</option>
                </select>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/gate.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="gate"
                  name="gate"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}
                >
                  <option>Uchylna</option>
                  <option>Dwuskrzydłowa</option>
                  <option>Roleta</option>
                </select>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/door.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="door"
                  name="door"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}
                >
                  <option>Nie</option>
                  <option>Tak</option>
                </select>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/window.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="window"
                  name="window"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}
                >
                  <option>Nie</option>
                  <option>80x60</option>
                  <option>100x60</option>
                  <option>120x100</option>
                  <option>150x100</option>
                </select>
              </div>
            </Fade>
          </div>
          {/* ITEMS */}
          <div className="basis-2/5 ">
            <div className="flex justify-evenly">
              <div className="flex flex-col items-center ">
                <label htmlFor="name">Imię</label>
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label htmlFor="name">Nazwisko</label>
                <input
                  onChange={onChange}
                  required
                  type="text"
                  id="surname"
                  name="surname"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label htmlFor="name">Email</label>
                <input
                  onChange={onChange}
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                />
              </div>
            </div>
            <textarea
              onChange={onChange}
              type="textarea"                
              id="area"
              name="area"
              className="border-solid min-w-[92%] h-[50%] border-2 border-black rounded-md m-5 "
              placeholder="Informacje Dodatkowe"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-700 py-5 px-20 mt-10 rounded-lg shadow-lg text-xl text-white font-bold"
        >
          Wyślij
        </button>
      </form>
    </>
  );
}

export default wycena;
