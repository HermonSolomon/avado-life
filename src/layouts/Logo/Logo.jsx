// Assets
import LogoClassic from "../../assets/imgs/logo/logo.svg";
import LogoDark from "../../assets/imgs/logo/logo-dark.svg";
import LogoDarkGreen from "../../assets/imgs/logo/logo-dark-green.svg";

// Available modifiers: --small; --large;
// See _logo.scss
// Available logo styles: default, dark, darkGreen

function Logo({ logoStyle, modifier }) {
  return (
    <img
      src={
        logoStyle === "dark"
          ? LogoDark
          : logoStyle === "darkGreen"
          ? LogoDarkGreen
          : LogoClassic
      }
      type="svg"
      alt="avado logo"
      className={`logo--${modifier}`}
    />
  );
}

export default Logo;
