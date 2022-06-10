import { useRef, useState, useCallback } from "react";

// Components
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import NavBar from "../../../components/NavBar/NavBar";
import Video from "../../../components/VideoContainer/Video";
import Carousel from "../../../components/Carousel/Carousel";

// Data for a widget with large buttons
import largeButtonsData from "./largeButtonsData";
// Buttons
import LargeButton from "../../../components/Buttons/LargeButton";
import ScrollToTopButton from "../../../components/Buttons/ScrollToTopButton";
// Assets
import VideoAsset from "../../../assets/videos/video.mp4";
import hermonImage from "../../../assets/imgs/culture-page/hermon.png";
import cornerDecor from "../../../assets/imgs/culture-page/corner-decor.svg";
// Custom hook
import { useMediaQuery } from "../../../custom-hooks/useMediaQuery";

const Culture = () => {
  const desktopView = useMediaQuery("(min-width: 768px)");
  const pageRef = useRef(null);

  /* Carousel Controls - start */

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [carouselPage, setCarouselPage] = useState(-1);

  const togglePopup = useCallback((num) => {
    if (num < 0) {
      setIsPopupVisible(false);
    } else {
      setCarouselPage(num);
      setIsPopupVisible(true);
    }
  }, []);

  /* Carousel Controls - end */

  const largeButtonsList = largeButtonsData.map((item, index) => (
    <li key={item.title}>
      <LargeButton
        title={item.title}
        image={item.img}
        onClick={() => {
          togglePopup(index + 1);
        }}
      />
    </li>
  ));
  return (
    <div>
      <div
        ref={pageRef}
        className="page page-book base-page-culture page--font-dark"
      >
        <div className="page__inner">
          <header id="page-three-top" className="header">
            <div className="background-image--culture"></div>
            <NavBar />
            <div className="hero">
              <div className="hero__container">
                <Video video={VideoAsset} />
                <div className="hero__text">
                  <p className="hero__paragraph">
                    Great culture. The people really make it a great place to
                    work. One of the best decisions I have made coming to work
                    at Avado.
                  </p>
                </div>
              </div>
            </div>
          </header>
          <main>
            <ContentContainer>
              <div className="text-container--2col">
                <h1 className="heading--primary">Our Culture</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  odio illo facere at quasi, quae illum nemo eveniet
                  reprehenderit, minus praesentium debitis ratione, harum
                  inventore necessitatibus in tempora cupiditate autem. Atque,
                  alias molestias laboriosam dolorum excepturi animi. Minus qui
                  aperiam facere cumque atque unde suscipit iure maxime cum?
                  Enim repudiandae ipsa obcaecati quaerat sint recusandae,
                  perferendis corrupti sequi fugit, necessitatibus iste
                  consequatur fuga et?
                </p>
                <ul className="paragraph paragraph__list paragraph__list--highlight">
                  <li>Decision-making</li>
                  <li>Meetings and connections</li>
                  <li>Norms and rituals</li>
                  <li>Priorities, purpose, values and behaviours</li>
                  <li>Rituals</li>
                  <li>Feedback</li>
                  <li>Psychological safety</li>
                </ul>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  alias, nulla ullam sed distinctio hic laudantium tempora odit
                  voluptate velit minima nihil voluptatum! Officia nihil
                  nesciunt earum nostrum velit repellendus dolore tenetur nulla!
                  Voluptatum eligendi:{" "}
                  <strong className="paragraph--highlight">
                    Humanity and Values.
                  </strong>
                </p>
                <h3 className="heading--tertiary">A bit about our Humanity </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore nihil provident corporis quia a. Harum tenetur quasi
                  unde cum ullam fuga eligendi error, sed expedita laborum
                  adipisci assumenda atque molestiae fugit, nisi excepturi nam?
                  Quidem veniam dolorum aliquid quae vel? Ea dolore laudantium
                  corrupti nesciunt, error explicabo molestias:
                </p>
                <p>
                  Our basic philosophy is that “Hard” is “Soft” and “Soft” is
                  “Hard”. Try this for size:
                </p>
                <ul className="paragraph paragraph__list">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vel, ullam.
                    <li>Plans are fantasies </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio, consectetur!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nisi, sequi..
                    </li>
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum quae earum nemo dolore unde similique est aspernatur
                  repellendus fuga enim deserunt cupiditate dolores, quo
                  adipisci, assumenda consequatur suscipit eveniet architecto
                  sequi ipsum nam placeat laboriosam neque quas. Eligendi ullam
                  iusto officiis reprehenderit repellendus. Dolorum, atque
                  maxime repellendus, quod ipsa minus, illo impedit dolorem
                  iusto laboriosam omnis alias nostrum voluptates eum!
                </p>
                <ul className="paragraph paragraph__list text-margin-top">
                  <li>Effective people practices</li>
                  <li>Product design that inspires</li>
                  <li>Clients who are enthralled</li>
                  <li>
                    Partners and suppliers who bend over backwards to assist us.
                  </li>
                </ul>
                <p className="heading heading--tertiary">
                  Think: What do you take away from this?
                </p>
              </div>
            </ContentContainer>
            <ContentContainer
              modifier="image"
              styleClass="content-container__container--2col"
            >
              <div className="text-container text-container--1col text-container--white-bg">
                <h3 className="heading--tertiary">
                  Underneath all of this are our values...
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium assumenda consequuntur eos earum aperiam numquam
                  maxime fugiat illum illo animi autem eum odio possimus
                  temporibus ad consequatur explicabo, nulla praesentium
                  voluptatem.
                </p>
                <h3 className="heading--tertiary">Our values Manifesto</h3>
                <p className="paragraph paragraph__list">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  sequi laborum beatae impedit hic facere, nobis pariatur labore
                  dolore vitae, optio maiores ipsam? Rerum voluptas unde
                  assumenda nostrum quia dolor tempora placeat omnis.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi totam repellat iure harum sed asperiores beatae,
                  quibusdam quidem deserunt eligendi. A veritatis ad cum fugit,
                  voluptate excepturi, nesciunt est molestias maiores animi
                  fugiat, mollitia ipsum.
                </p>
              </div>
              {desktopView && (
                <div className="image-container">
                  <img src={hermonImage} alt="" className="" />
                </div>
              )}
            </ContentContainer>
            <ContentContainer>
              <div className="text-container--2col">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                  veniam accusamus nesciunt dolor aliquam molestiae enim, nulla
                  aut itaque sit blanditiis mollitia! Totam adipisci ab possimus
                  tempore dolor libero facere ipsa voluptates?
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  rerum cum deleniti officiis hic velit quidem rem, numquam
                  neque fugiat nihil illo veniam, possimus recusandae
                  perspiciatis cupiditate in sunt deserunt saepe, ad id fugit
                  tenetur. Facilis expedita sint fuga perspiciatis odit
                  reprehenderit sequi!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione laborum reiciendis minus voluptatibus explicabo. Vero
                  asperiores libero commodi doloribus dolore nostrum
                  necessitatibus eos laborum hic a, voluptate pariatur quae
                  porro error, impedit quasi ipsa quisquam.
                </p>
                <p className="heading--tertiary">
                  Above all, we aim to use our Values to produce and deliver
                  incredible learning experiences that create real change in
                  peoples' lives.
                </p>
              </div>
            </ContentContainer>
            <ContentContainer modifier="gradient">
              <div className="text-container text-container--2col text-container--white-bg">
                <h2 className="heading--secondary">
                  And the Values themselves...
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  architecto dolorem! Fugit quod excepturi, error, reprehenderit
                  aliquam blanditiis illo dolores sit fuga, quasi tenetur
                  molestiae accusantium nisi quia aliquid unde facere
                  doloremque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  corrupti blanditiis placeat accusantium distinctio fugiat
                  deserunt quas minima neque? Temporibus magni assumenda
                  excepturi praesentium error labore esse ullam earum voluptates
                  voluptatum commodi, dolorum voluptas!
                </p>
                <p>So what are our Values, and how do they work?</p>
                <p>
                  When we co-created our Values, we wanted values that would:
                </p>
                <ul className="paragraph paragraph__list">
                  <li>Guide all of our decisions and ways of working;</li>
                  <li>Underline everything we do as a company;</li>
                  <li>Guide how we treat people;</li>
                  <li>Facilitate our behaviour;</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur amet optio maxime error nesciunt doloribus et sapiente
                  saepe voluptas, incidunt repellat sit quos temporibus tempora
                  nostrum esse accusamus soluta at, pariatur officia, odio vel
                  quam. Atque libero nihil at ab quae nesciunt debitis placeat.:
                </p>
                <ul className="paragraph paragraph__list">
                  <li>Decision-making;</li>
                  <li>Meetings and connections;</li>
                  <li>Norms and rituals;</li>
                  <li>Rituals;</li>
                  <li>Feedback;</li>
                  <li>Psychological safety.</li>
                </ul>
                <div className="corner-image">
                  <img src={cornerDecor} alt="" />
                </div>
              </div>
            </ContentContainer>
            <ContentContainer>
              <h2 className="heading--secondary heading--center">
                Click each hotspot to find out more about our values
              </h2>
              <ul className="large-buttons-container">{largeButtonsList}</ul>
            </ContentContainer>
            <ContentContainer>
              <div className="text-container--2col">
                <h2 className="heading--secondary">
                  You’re free to do your best work – but what does this really
                  mean?
                </h2>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    reprehenderit laboriosam saepe enim, a magnam! Neque numquam
                    iure nesciunt animi repellendus perferendis voluptates totam
                    tenetur illum exercitationem, doloremque eligendi sequi, est
                    quasi.{" "}
                  </p>
                  <p>
                    In practice, there are a few things you can look forward to
                    here:
                  </p>
                  <ul className="paragraph paragraph__list">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusamus dolorem maiores dignissimos, explicabo delectus,
                      aperiam esse cumque deserunt laboriosam numquam sit iste
                      quos repellendus asperiores tempora nisi nulla eligendi
                      eum! Maxime ducimus provident, voluptatum assumenda nihil
                      eum odit obcaecati!
                    </li>
                  </ul>
                </div>
                <ul className="paragraph paragraph__list">
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit amet fuga obcaecati, aut, possimus perferendis qui
                    aperiam accusantium blanditiis corporis est! Dolore magni
                    error, enim commodi veritatis omnis dignissimos recusandae
                    voluptatum itaque ratione est, amet voluptatibus
                    perspiciatis. Tempore labore facere recusandae distinctio,
                    dolore temporibus quas perferendis, rerum deserunt quia
                    corrupti vero delectus et. Quod.
                  </li>
                </ul>
              </div>
            </ContentContainer>

            <ContentContainer>
              <ScrollToTopButton parentContainer={pageRef} />
            </ContentContainer>
          </main>
        </div>
      </div>

      {isPopupVisible && (
        <Carousel carouselPage={carouselPage} togglePopup={togglePopup} />
      )}
    </div>
  );
};

export default Culture;
