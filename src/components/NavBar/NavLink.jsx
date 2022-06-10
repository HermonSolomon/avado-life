import { Link } from "react-router-dom";

function NavLink({ item, showMenu }) {
  return (
    <Link
      to={item.path}
      role="menuitem"
      className={`main-nav__link ${item.active && "active"}`}
      tabIndex={showMenu ? "1" : "-1"}
    >
      <img src={item.img} alt="" className="main-nav__icon" />
      <span>{item.title}</span>
    </Link>
  );
}

export default NavLink;
