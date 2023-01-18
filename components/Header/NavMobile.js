import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

function NavMobile({ links,openMenu}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  return (
    <div className="absolute top-[75px] left-0 bg-white/95 shadow-xl w-[100vw] ">
      <nav className="ml-auto w-full">
        <ul className="flex flex-col gap-8 px-5 py-10">
          {links.map((link) => (
            <Link
              onClick={()=>(openMenu())}
              key={link.name}
              href={link.link}
              className={classNames(
                // eslint-disable-next-line
                usePathname() === link.link
                  ? "text-black underline underline-offset-8 decoration-2"
                  : "text-black hover:bg-red-700 transition-all  hover:text-white",
                " py-1 rounded-md max-lg:text-sm max-md:text-xl   font-roboto font-normal"
              )}
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )

}

export default NavMobile;
