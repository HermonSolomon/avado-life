function BurgerButton({ showMenu, onClick }) {
   return (
      <button
         onClick={onClick}
         id="navbar-btn--two"
         className={`js-burger-btn burger-btn ${
            showMenu ? "burger-btn--open" : ""
         }`}
         aria-controls="main-nav"
         aria-haspopup="true"
         aria-expanded={showMenu}
         aria-label="Main menu"
      >
         <span className="burger-btn__lines"></span>
      </button>
   );
}

export default BurgerButton;
