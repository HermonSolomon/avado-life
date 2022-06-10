import { useEffect, useCallback, useState } from "react";
import { useMediaQuery } from "../../custom-hooks/useMediaQuery";
import Accountability from "./content/Accountability";
import Ambition from "./content/Ambition";
import Care from "./content/Care";
import Empowerment from "./content/Empowerment";
import Transparency from "./content/Transparency";

const CAROUSEL_CLOSED = "carousel--closed";
const CAROUSEL_OPEN = "carousel--open";

const content = [
  {
    category: "Accountability",
    items: Accountability(),
    images: [
      {
        firstCard: "",
        secondCard: "",
        thirdCard: "",
      },
    ],
  },
  {
    category: "Ambition",
    items: Ambition(),
    images: [
      {
        firstCard: "",
        secondCard: "",
        thirdCard: "",
      },
    ],
  },
  {
    category: "Care",
    items: Care(),
    images: [
      {
        firstCard: "",
        secondCard: "",
        thirdCard: "",
      },
    ],
  },
  {
    category: "Empowerment",
    items: Empowerment(),
    images: [
      {
        firstCard: "",
        secondCard: "",
        thirdCard: "",
      },
    ],
  },
  {
    category: "Transparency",
    items: Transparency(),
    images: [
      {
        firstCard: "",
        secondCard: "",
        thirdCard: "",
      },
    ],
  },
];

const CloseBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn btn--secondary btn__circle btn__close"
    >
      <i className="fas fa-times"></i>
    </button>
  );
};

const NavBtn = ({ onClick, dir, children }) => {
  return (
    <button onClick={onClick} className={`btn btn--overlay btn__${dir}`}>
      {children}
    </button>
  );
};

const CarouselItem = ({ itemState, children }) => {
  return (
    <ul className={`carousel__item carousel__item--${itemState}`}>
      {children}
    </ul>
  );
};

const CarouselIndicators = ({ total, current, handleIndicators }) => {
  const indicators = Array(total).fill(true);

  console.log(indicators);
  console.log(current);

  return (
    <ul className="carousel__indicators">
      {indicators.map((val, index) => {
        const active =
          current === index ? "carousel__indicators__item--active" : "";
        return (
          <li
            key={`indicator${index}`}
            className={`carousel__indicators__item ${active}`}
            onClick={() => handleIndicators(index)}
          ></li>
        );
      })}
    </ul>
  );
};

const Carousel = (props) => {
  const [classState, setClassState] = useState(CAROUSEL_CLOSED);
  const [currentItem, setCurrentItem] = useState(0);

  const desktopView = useMediaQuery("(min-width: 768px)");

  const cardsPerItem = desktopView ? 3 : 1;
  const pageNum = !props.carouselPage ? 0 : props.carouselPage - 1;
  const carouselContent = content[pageNum];

  const closePopup = useCallback(() => {
    setClassState(CAROUSEL_CLOSED);
    setTimeout(() => {
      props.togglePopup(-1);
    }, 500);
  }, [props]);

  useEffect(() => {
    setTimeout(() => {
      setClassState(CAROUSEL_OPEN);
    }, 50);

    const escFunction = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [closePopup]);

  const title = carouselContent.category;
  const totalCards = carouselContent.items.length;

  let items = [];
  for (let i = 0; i < totalCards; i += cardsPerItem) {
    items.push(carouselContent.items.slice(i, i + cardsPerItem));
    // do whatever
  }
  const carouselItems = items.map((cardGroup, index) => {
    const itemState =
      index === currentItem ? "centre" : index < currentItem ? "end" : "start";
    return (
      <CarouselItem key={index} itemState={itemState}>
        {cardGroup.map((card, index) => {
          return (
            <li
              key={index + Math.round(Math.random() * 100000)}
              className="carousel__item__card"
            >
              {card}
            </li>
          );
        })}
      </CarouselItem>
    );
  });

  const prevItem = () => {
    //decrease to move carousel to the right
    if (currentItem > 0) {
      setCurrentItem(currentItem - 1);
    }
  };

  const nextItem = () => {
    //increase to move carousel to the left
    if (currentItem < items.length - 1) {
      setCurrentItem(currentItem + 1);
    }
  };

  // handle indicators
  const handleIndicators = (index) => {
    setCurrentItem(index);
  };

  if (carouselContent) {
    return (
      <div className={`carousel ${classState} carousel--bg${pageNum + 1}`}>
        <h2 className="heading heading--secondary heading--light">{title}</h2>
        {carouselItems}
        <CloseBtn onClick={closePopup} />
        <NavBtn dir="prev" onClick={prevItem}>
          <i className="fas fa-chevron-left"></i>
        </NavBtn>
        <NavBtn dir="next" onClick={nextItem}>
          <i className="fas fa-chevron-right"></i>
        </NavBtn>
        <CarouselIndicators
          total={items.length}
          current={currentItem}
          handleIndicators={handleIndicators}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Carousel;
