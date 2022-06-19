import Link from "next/link";
import styles from "./NavBar.module.css";
import cls from "classnames";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;