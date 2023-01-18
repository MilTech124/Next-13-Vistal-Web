import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

function Nav({ links }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav>
      <ul className="flex gap-8">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className={classNames(
              // eslint-disable-next-line
              usePathname() === link.link
                ? "text-black underline underline-offset-8 decoration-2"
                : "text-black hover:bg-red-700 transition-all  hover:text-white",
              "px-2 py-1 rounded-md max-lg:text-sm  font-roboto font-normal"
            )}
          >
            <li>{link.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
