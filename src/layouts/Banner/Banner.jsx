import React from "react";

const Banner = ({ modifier, styleClass, children }) => {
   return (
      <div
         className={`banner-container banner-images ${
            modifier ? `banner-images--${modifier}` : ""
         }`}
      >
         <div
            className={`content-container__container ${
               styleClass ? styleClass : ""
            }`}
         >
            {children}
         </div>
      </div>
   );
};

export default Banner;
