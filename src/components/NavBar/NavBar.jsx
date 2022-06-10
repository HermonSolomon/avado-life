import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Nav items data
import MenuItems from "./MenuItems";
// Components
import NavLink from "./NavLink";
import Logo from "../../layouts/Logo/Logo";
// Buttons
import CTAButton from "../Buttons/CTAButton";
import BurgerButton from "../Buttons/BurgerButton";
// Assets
import HomeIcon from "../../assets/imgs/nav-buttons/btn-home.svg";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [navItems, setNavItems] = useState(MenuItems);

  const { pathname } = useLocation();

  useEffect(() => {
    setNavItems((prevState) => {
      return prevState.map((item) => {
        return item.path === pathname
          ? { ...item, active: true }
          : { ...item, active: false };
      });
    });
  }, [pathname]);

  const navListItems = navItems.map((item, index) => {
    return (
      <li
        className={`main-nav__item ${
          item.active ? "main-nav__item--active" : ""
        }`}
        key={index}
      >
        <NavLink item={item} showMenu={showMenu} />
      </li>
    );
  });

  return (
    <div className="main-nav">
      <BurgerButton
        showMenu={showMenu}
        onClick={() => setShowMenu(!showMenu)}
      />
      <nav
        aria-labelledby="burger-btn"
        id="main-nav"
        className={`js-main-nav main-nav_container ${
          showMenu && "main-nav_container--visible"
        }`}
      >
        <ul className="main-nav__list main-nav__list--home">
          <li className="main-nav__item">
            <Link to="/home" role="menuitem" className="main-nav__link btn">
              <img src={HomeIcon} alt="" className="main-nav__icon" />
            </Link>
          </li>
          <li className="main-nav__item main-nav__item--btn">
            <CTAButton
              modifier="secondary"
              text="PDF Version"
              htmlTag="button"
            />
          </li>
        </ul>
        <ul className="main-nav__list main-nav__list--icons">{navListItems}</ul>
        <div className="main-nav__logo ">
          <Logo />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
