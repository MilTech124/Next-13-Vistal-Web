import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";

function ChangeLang() {
  const { locale, locales, push, asPath } = useRouter();
  return (
    <div className="absolute bottom-[-90vh] left-[-20px] hover:left-0 p-5 transition-all bg-white rounded-r-lg flex flex-col gap-5">
      <img
        onClick={() => push(asPath, undefined, { locale: "pl" })}
        src="/flag/pl.png"
        className={
          "w-10 p-1 border-solid border-2 rounded-lg hover:scale-105 cursor-pointer"
        }
        style={locale === "pl" ? { borderColor: "#1e3888" } : null}
      />
      <img
        onClick={() => push(asPath, undefined, { locale: "sk" })}
        src="/flag/sk.png"
        className="w-10 p-1 border-solid border-2 rounded-lg hover:scale-105 cursor-pointer"
        style={locale === "sk" ? { borderColor: "#1e3888" } : null}
      />
      <img
        onClick={() => push(asPath, undefined, { locale: "hu" })}
        src="/flag/hu.png"
        className="w-10 p-1 border-solid border-2 rounded-lg hover:scale-105 cursor-pointer"
        style={locale === "hu" ? { borderColor: "#1e3888" } : null}
      />
    </div>
  );
}

export default ChangeLang;
