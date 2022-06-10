import { useRef } from "react";

// Components
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import NavBar from "../../../components/NavBar/NavBar";
import Video from "../../../components/VideoContainer/Video";
import Banner from "../../../layouts/Banner/Banner";

// Buttons
import ScrollToTopButton from "../../../components/Buttons/ScrollToTopButton";
// Assets
import VideoAsset from "../../../assets/videos/video.mp4";
import cornerDecor from "../../../assets/imgs/join-us-page/Henry.svg";
// Custom hook

const Join = () => {
  const pageRef = useRef(null);
  return (
    <div
      ref={pageRef}
      className="page page-book base-page-culture page--font-dark"
    >
      <div className="page__inner">
        <header id="page-three-top" className="header">
          <div className="background-image--join"></div>
          <NavBar />
          <div className="hero">
            <div className="hero__container">
              <Video video={VideoAsset} />
              <div className="hero__text">
                <p className="hero__paragraph">
                  I feel right at home in Avado!
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <ContentContainer modifier="gapless-bottom">
            <div className="text-container--2col">
              <h1 className="heading--primary">Join us</h1>
              <h3 className="heading--tertiary">
                Pay and personal information
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit exercitationem obcaecati sequi, error voluptatem
                similique incidunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                quibusdam laudantium at cumque iste iusto, nostrum amet aliquid
                minus qui.
              </p>
              <ul className="paragraph paragraph__list paragraph__list--highlight">
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit.</li>
              </ul>
              <h3 className="heading--tertiary">Days 1–90 – The first day</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat deserunt mollitia pariatur accusamus facilis aut quo
                quod a eius blanditiis?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
                ex nam voluptas corrupti, adipisci laborum fuga laboriosam
                provident consectetur doloremque. Repudiandae iusto modi,
                debitis accusantium exercitationem facilis aspernatur ea porro.
              </p>
            </div>
          </ContentContainer>

          <div className="banner">
            <Banner
              modifier="banner-join"
              styleClass="content-container__container--2col"
            >
              <div className="text-container--bg-none">
                <p className="banner-text">
                  Please remember to have your proof of eligibility to work in
                  the country in which you are employed – this is a legal
                  requirement. Don’t worry, we won’t show anyone your passport
                  photo!
                </p>
              </div>
              <div></div>
            </Banner>
          </div>

          <ContentContainer>
            <div className="text-container--2col">
              <h3 className="heading--tertiary">Days 1–90 – First weeks</h3>
              <p>During your first week you might:</p>
              <ul className="paragraph paragraph__list paragraph__list--highlight">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  aspernatur ea ullam?
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  dignissimos natus harum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt vel ipsa nesciunt!
                </li>
              </ul>
              <p>In the second week you could find yourself:</p>
              <ul className="paragraph paragraph__list paragraph__list--highlight">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                  eligendi esse inventore harum animi doloribus!
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Totam earum minima, magnam ex inventore debitis.
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Commodi mollitia, consequuntur fugiat animi tenetur minima!
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                  dolore?
                </li>
              </ul>
            </div>
          </ContentContainer>

          <ContentContainer>
            <div className="text-container--2col">
              <h3 className="heading--tertiary">
                Days 1–90 Your SIP (Settling-In Process)
              </h3>
              <p>Settling In Process</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod
                iste unde. Eos, minus dolorem laboriosam hic non quisquam
                repudiandae possimus enim at tempore deserunt quo dolor,
                consequatur aliquam, eligendi mollitia.
              </p>
              <p>Key differences of a SIP are:</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt velit quos dolores officiis magni sequi voluptas sunt,
                molestiae, vero explicabo doloribus obcaecati! Numquam
                accusantium veritatis, est aliquid aperiam quod amet.
              </p>
              <p>Your week three might look something like this:</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                eius, cum possimus nostrum eaque recusandae!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti atque neque doloremque numquam est. Nesciunt non,
                molestias natus in nemo beatae impedit autem libero magnam quis?
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
                ea odio amet impedit aspernatur deleniti?
              </p>
              <ul className="paragraph paragraph__list text-margin-top">
                <div className="corner-image">
                  <img src={cornerDecor} alt="" />
                </div>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ducimus saepe nesciunt. Natus nemo et dolorem
                  accusamus magnam nobis distinctio blanditiis. Repudiandae
                  assumenda.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, id dolore? Delectus fugiat ad autem magnam eaque
                  tenetur id? Repudiandae.
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                repellat distinctio, repudiandae nesciunt dolorem tempora
                nostrum ut ipsum cum, laborum cupiditate iure excepturi rerum
                dolore culpa sunt voluptas ex facere!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur (adipisicing) elit. Quam
                tempora nesciunt officiis nihil saepe rerum eos aliquam
                aspernatur temporibus iusto?{" "}
              </p>
            </div>
          </ContentContainer>
          <ContentContainer>
            <ScrollToTopButton parentContainer={pageRef} />
          </ContentContainer>
        </main>
      </div>
    </div>
  );
};

export default Join;
