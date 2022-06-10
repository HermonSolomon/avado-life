// Asset
import btnScrollTop from "../../assets/imgs/global-buttons/btn-scroll-top.svg";

const ScrollToTopButton = ({ parentContainer }) => {
   // This function will scroll the window to the top
   const scrollToTop = () => {
      parentContainer.current.scrollTo({
         top: 0,
         behavior: "smooth", // for smoothly scrolling
      });
   };
   return (
      <div className="flex-column">
         <button
            onClick={scrollToTop}
            className="btn btn--scroll-top"
            aria-label="Scroll to the top of the screen "
         >
            <img src={btnScrollTop} alt="" />
         </button>
      </div>
   );
};

export default ScrollToTopButton;
