import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/data";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex  justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((links) => {
            return (
              <li key={links.label}>
                <a
                  href={links.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {links.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="/"
          className="font-montserrat
                  text-slate-600 text-white-400
                  p-1 bg-coral-red rounded-md hover:bg-[#ff5745] transition
                  max-lg:hidden
                  mr-2
                  "
        >
          Signin/Expore now
        </a>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
