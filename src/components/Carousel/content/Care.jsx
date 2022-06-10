import CardTitle from "./CardTitle";
import cardOneImg from "../../../assets/imgs/culture-page/carousel/carousel_s1_c1.png";
import cardTwoImg from "../../../assets/imgs/culture-page/carousel/carousel_s1_c2.png";
import cardThreeImg from "../../../assets/imgs/culture-page/carousel/carousel_s1_c3.png";

const Care = () => {
  return [
    <div>
      <CardTitle num={1} />
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardOneImg} alt="" />
        </div>
      </div>
    </div>,

    <div>
      <CardTitle num={2} />
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardTwoImg} alt="" />
        </div>
      </div>
    </div>,
    <div>
      <CardTitle num={3} />
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardThreeImg} alt="" />
        </div>
      </div>
    </div>,
    <div>
      <CardTitle num={4} />
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardOneImg} alt="" />
        </div>
      </div>
    </div>,

    <div>
      <CardTitle num={5} />
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardTwoImg} alt="" />
        </div>
      </div>
    </div>,
    <div>
      <CardTitle num={6} />
      <ul>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardThreeImg} alt="" />
        </div>
      </div>
    </div>,
    <div>
      <CardTitle num={7} />
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardOneImg} alt="" />
        </div>
      </div>
    </div>,
    <div>
      <CardTitle num={8} />
      <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit..</li>
      </ul>
      <div className="card-img">
        <div className="img-wrapper">
          <img src={cardTwoImg} alt="" />
        </div>
      </div>
    </div>,
  ];
};

export default Care;
