import Link from "next/link";
import React, { useState } from "react";
import cls from "classnames";
import styles from "./NavBar.module.css";
import  NavItem  from "./NavItem";

const MENU_LIST = [
  { text: "Services", href: "/services" },
  { text: "Privacy Policy", href: "/privacypolicy" },
  { text: "Terms & Conditions", href: "/terms-and-conditions" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <header className="sticky z-30 top-0 bg-white ">
      <nav
        className={`nav ${
          navActive ? "active" : ""
        }
        `}
      >
        <Link href={"/"}>
          <a onClick={() => setActiveIdx(-1)}>
            <h1 className="text-xl font-semibold">CodeWithMarish</h1>
          </a>
        </Link>
        <div
          className={`menu__icon ${
            navActive ? "active" : "inactive"
          }`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav__menu ${navActive ? "active" : ""}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} active={idx === activeIdx} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;