/* eslint-disable */
import React from "react";
import Heading from "../components/ui/Heading";
import { useState, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
// TRANSLATION
import { useTranslation } from "next-i18next";

function wycena() {
  const { t } = useTranslation("wycena");
  const router = useRouter();
  const form = useRef();
  const [formData, setFormData] = useState({
    width: "",
    height: "",
    roof: "Jednospadowy",
    paint: "Akrylowa",
    tiles: "Trapezowa",
    gate: "Uchylna",
    gate2: "Uchylna",
    door: "Nie",
    window: "Nie",
    anotherWindow: "Nie",
    name: null,
    surname: null,
    email: null,
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
      <Heading title={t("Indywidualna Wycena")} />

      <p className="p-10 max-sm:p2 text-lg" style={{ whiteSpace: "pre-wrap" }}>
        {t("text-wycena")}
      </p>
      <form
        onSubmit={onSubmit}
        ref={form}
        className=" pb-10 flex flex-col items-center">
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
                  onChange={onChange}></input>
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
                  onChange={onChange}></input>
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
                  onChange={onChange}>
                  <option>{t("Jednospadowy")}</option>
                  <option>{t("Dwuspadowy")}</option>
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
                  onChange={onChange}>
                  <option>{t("Akrylowa")}</option>
                  <option>{t("Drewnopodobny")}</option>
                  <option>{t("Ocynk")}</option>
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
                  onChange={onChange}>
                  <option>{t("Trapezowa")}</option>
                  <option>{t("Blachodachówka")}</option>
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
                  onChange={onChange}>
                  <option>{t("Uchylna")}</option>
                  <option>{t("Dwuskrzydłowa")}</option>
                  <option>{t("Roleta")}</option>
                </select>
              </div>
            </Fade>
            {formData.width > 600 
            ? <Fade>
            <div className="flex flex-col items-center gap-5">
              <img src="/svg/gate.svg" width="75px" alt="icon" />{" "}
              <select
                type="text"
                id="gate2"
                name="gate2"
                className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                onChange={onChange}>
                <option>{t("Uchylna")}</option>
                <option>{t("Dwuskrzydłowa")}</option>
                <option>{t("Roleta")}</option>
              </select>
            </div>
          </Fade>:null}
            
            <div> 
              <h3> Dodatkowe opcje:</h3>

            </div>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/door.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="door"
                  name="door"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}>
                  <option>{t("Nie")}</option>
                  <option>{t("Tak")}</option>
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
                  onChange={onChange}>
                  <option>{t("Nie")}</option>
                  <option>80x60</option>
                  <option>100x60</option>
                  <option>120x100</option>
                  <option>150x100</option>
                </select>
              </div>
            </Fade>
            <Fade>
              <div className="flex flex-col items-center gap-5">
                <img src="/svg/window.svg" width="75px" alt="icon" />{" "}
                <select
                  type="text"
                  id="anotherWindow"
                  name="anotherWindow"
                  className="border-solid text-center border-2 border-black w-[150px] rounded-md py-2 px-5"
                  onChange={onChange}>
                  <option>{t("Nie")}</option>
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
                <label htmlFor="name">{t("Imię")}</label>
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
                <label htmlFor="name">{t("Nazwisko")}</label>
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
              placeholder={t("Informacje Dodatkowe")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-red-700 hover:bg-red-500 py-5 px-20 mt-10 rounded-lg shadow-lg text-xl text-white font-bold">
          {t("Wyślij")}
        </button>
      </form>
    </>
  );
}
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "footer", "menu", "wycena"],
        null,
        ["pl", "sk"]
      )),
    },
  };
};

export default wycena;
