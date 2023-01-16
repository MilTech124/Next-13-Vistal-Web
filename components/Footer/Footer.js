import Image from "next/image";
import React from "react";
import { Bounce } from "react-awesome-reveal";

function Footer() {
  const bgStyle = {
    backgroundImage: "url('/bgfooter.jpeg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <footer>
      {/* GREY SPACER */}
      <div className="bg-slate-500 drop-shadow-lg w-full h-5"></div>
      {/* GREY SPACER */}
      {/* INNER FOOTER */}
      <div className="flex  justify-between max-sm:flex-col ">
        {/* LEFT FOOTER */}
        <div className="flex-1 md:pt-20 py-10 centered">
          <Image
            src="/vistal-logo.jpg"
            width="150"
            height="50"
            alt="logo-vistal"
          />
          <h4 className="font-bold text-lg">
            Vistal - producent garaży blaszanych.
          </h4>
          <p className="px-5">
            Serdecznie zapraszamy do kontaktu i skorzystania z bezpłatnej
            wyceny. Nasi konsultanci chętnie odpowiedzą na wszystkie Państwa
            pytania.Działamy na terenie całego kraju.
          </p>
          <div>
            <div className="flex justify-around pt-5">
              <div>
                <p>
                  <b>Godziny pracy:</b>
                </p>
                <p>pn-pt: 8:00-17:00</p>
                <p>sobota: 9:00-16:00</p>
                <div className="flex justify-center pt-5 gap-5 ">
                  <a
                    className="hover:rotate-6 transition-all"
                    href="https://goo.gl/maps/ZigWyEiaqbb1FzNJ6"
                  >
                    <img src="/svg/googlemaps.svg" alt="googlemaps" />
                  </a>

                  <a
                    className="hover:rotate-6 transition-all"
                    href="https://www.google.com/search?q=Vistal+gara%C5%BCe+blaszane&sxsrf=AJOqlzVk3d3vM8ST5QzMEOtstZPiw9WViw%3A1673871639449&ei=F0HFY8CMG4iJrwTsoIbgCQ&ved=0ahUKEwiA9N_jicz8AhWIxIsKHWyQAZwQ4dUDCA8&uact=5&oq=Vistal+gara%C5%BCe+blaszane&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIOCC4QgAQQxwEQrwEQ6gQyAggmMhkILhCABBDHARCvARDqBBDcBBDeBBDgBBgBOgQIIxAnOgoILhDHARDRAxBDOhEILhCABBCxAxCDARDHARDRAzoECAAQQzoKCC4QxwEQrwEQQzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgoIABCxAxCDARBDOgoILhCvARDHARBDOg4ILhCABBCxAxDHARDRAzoFCAAQgAQ6CwguEIAEEMcBEK8BOggIABCxAxCDAToLCC4QgAQQxwEQ0QM6CwguEK8BEMcBEIAEOgsILhDHARDRAxCABDoGCAAQFhAeOg4ILhCvARDHARCABBDqBDoZCC4QrwEQxwEQgAQQ6gQQ3AQQ3gQQ4AQYAUoECEEYAEoECEYYAVAAWJ8zYIE1aABwAHgAgAGsAYgB9ROSAQQ0LjE4mAEAoAEBwAEB2gEGCAEQARgU&sclient=gws-wiz"
                  >
                    <img src="/svg/GoogleIco.svg" alt="googleico" />
                  </a>
                </div>
              </div>
              <div>
                <div className="flex gap-5 flex-col">
                  <a
                    className="hover:rotate-6 transition-all"
                    href="https://www.facebook.com/ProducentVistalGarazeBlaszane"
                  >
                    <img src="/svg/fwhite.svg" />
                  </a>
                  <div className="text-sm">
                    <img src="/svg/politic.svg" />
                    Polityka prywatności
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LEFT FOOTER */}
        {/* RIGHT FOOTER */}
        <div
          className="flex-1 z-0 relative max-sm:py-5 flex items-center justify-center"
          style={bgStyle}
        >
          <div className="flex z-10 relative p-1 gap-10 ">
            <Bounce>
              <div className=" bg-white rounded-xl hover:bg-red-700 hover:rotate-3 transition-all">
                <a href="tel:+48 693 344 132">
                  <img src="/svg/fphone.svg" />
                </a>
              </div>
            </Bounce>
            <Bounce>
              <div className="bg-white p-1 rounded-xl  hover:bg-red-700 hover:rotate-3 transition-all">
                <a href="mailto:kontakt@vistal-garaze-blaszane.pl">
                  <img src="/svg/fmail.svg" />
                </a>
              </div>
            </Bounce>
          </div>
          <div className="absolute z-0 top-0 left-0 w-full center h-full bg-black/50"></div>
        </div>

        {/* RIGHT FOOTER */}
      </div>
      {/* INNER FOOTER */}
      {/* GREY SPACER */}
      <div className="bg-slate-500 shadow-lg w-full h-5"></div>
      {/* GREY SPACER */}
    </footer>
  );
}

export default Footer;
