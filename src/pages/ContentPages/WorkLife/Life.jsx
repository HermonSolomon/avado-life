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

const Life = () => {
  const pageRef = useRef(null);
  return (
    <div
      ref={pageRef}
      className="page page-book base-page-culture page--font-dark"
    >
      <div className="page__inner">
        <header id="page-three-top" className="header">
          <div className="background-image--life"></div>
          <NavBar />
          <div className="hero">
            <div className="hero__container">
              <Video video={VideoAsset} />
              <div className="hero__text">
                <p className="hero__paragraph">
                  A couple of colleagues shared personal information about their
                  health and wellbeing and everyone was really supportive and
                  asked how they could assist to make things easier.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <ContentContainer>
            <div className="text-container--2col">
              <h1 className="heading--primary">Your working life</h1>
              <h3 className="heading--tertiary">Working hours</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                optio laudantium beatae animi soluta debitis distinctio,
                dignissimos consequatur ipsam voluptatum libero! Libero amet
                aperiam quidem velit voluptas molestiae id soluta, provident
                aliquam, corporis magnam dolorem eos! Doloremque iusto mollitia
                eligendi explicabo praesentium. Magni ad ducimus, praesentium
                maxime hic. Cumque quasi, nesciunt perspiciatis odio debitis
                numquam nostrum provident iusto.
              </p>
              <h3 className="heading--tertiary">Dress code</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Mollitia id fugit, nemo nostrum eaque!
              </p>
              <h3 className="heading--tertiary">Benefits</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias aliquid non quaerat consequuntur saepe incidunt.
              </p>
            </div>
          </ContentContainer>

          <div className="banner">
            <Banner
              modifier="banner-life"
              styleClass="content-container__container--2col"
            >
              <div></div>
              <div className="text-container--1col text-container--white-bg text-container--small-text-container ">
                <h3 className="heading--tertiary">Remote working</h3>
                <p className="">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  iste nesciunt officiis commodi? Ducimus neque fuga, obcaecati
                  provident totam ratione facere temporibus eveniet fugit
                  debitis dolor voluptatum iste corrupti quas exercitationem.
                  Ratione harum ex, deleniti omnis quod accusantium aperiam
                  velit soluta iure tenetur similique facilis quaerat atque
                  porro unde sunt!
                </p>
              </div>
            </Banner>
          </div>

          <ContentContainer>
            <div className="text-container--2col">
              <h3 className="heading--tertiary">Your time out from work</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam repudiandae officia, nesciunt velit ex suscipit sint
                cum culpa minima maxime voluptate facilis porro architecto eum
                dolor tenetur cumque recusandae molestiae, mollitia cupiditate
                adipisci! Explicabo reprehenderit beatae in deserunt iure
                voluptates?
              </p>
              <p>Simple methodology for arranging time out</p>
              <ul className="paragraph paragraph__list paragraph__list--highlight">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam, voluptatibus!
                </li>
                <li>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iste, praesentium.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Sapiente, similique!
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Rerum.
                </li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
              <h3 className="heading--tertiary">Sick days</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                iure laborum explicabo. Soluta, ipsum debitis?
                <strong>Lorem ipsum dolor sit amet consectetur. </strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam iste incidunt obcaecati:
              </p>
              <ul className="paragraph paragraph__list paragraph__list--highlight">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  maiores voluptate maxime?
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  amet nostrum rerum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  laborum, dolorum fuga praesentium suscipit similique.
                </li>
              </ul>
            </div>
          </ContentContainer>
          <Banner modifier="banner-life-secondary">
            <div className="text-container text-container--white-bg">
              <h3 className="heading--tertiary">Mental health and wellbeing</h3>
              <div className="content-container__container--2col">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, soluta id est eum labore eaque laudantium quidem nulla
                  blanditiis impedit, culpa tempore? Perspiciatis quisquam
                  deserunt omnis, modi reiciendis expedita commodi sint
                  veritatis a voluptas quas.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora perferendis alias molestiae accusantium ab distinctio,
                  rerum eligendi commodi. Laudantium nulla facere, voluptate
                  repellat provident esse fugiat repudiandae itaque dolorem
                  laboriosam.
                </p>
              </div>
            </div>
          </Banner>
          {/* <div className="banner">
            <div className="banner-container">
              <Banner modifier="banner-life-secondary"></Banner>
            </div>
          </div> */}
          <ContentContainer>
            <ScrollToTopButton parentContainer={pageRef} />
          </ContentContainer>
        </main>
      </div>
    </div>
  );
};

export default Life;
