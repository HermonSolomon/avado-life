import React from "react";
import { useRef } from "react";
// Components
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import NavBar from "../../../components/NavBar/NavBar";
import Banner from "../../../layouts/Banner/Banner";
// Buttons
import CTAButton from "../../../components/Buttons/CTAButton";
import ScrollToTopButton from "../../../components/Buttons/ScrollToTopButton";
// Assets
// import VideoAsset from "../../../assets/videos/video.mp4";

const Working = () => {
  const pageRef = useRef(null);

  return (
    <div
      ref={pageRef}
      className="page page-book base-page-culture page--font-dark"
    >
      <div className="page-inner">
        <header id="page-three-top" className="header">
          <div className="background-image--working"></div>
          <NavBar />
          <div className="hero">
            <div className="hero__container hero__container--working-inner-bg">
              {/* <Video video={VideoAsset} /> */}
              <div className="hero__text">
                <p className="hero__paragraph">
                  Leaping tall buildings and looking fabulous! If I could do
                  that wearing a cape and Avado branded underpants on the
                  outside it would be amazing...
                </p>
              </div>
            </div>
          </div>
        </header>

        <main>
          <ContentContainer>
            <div className="text-container--2col">
              <h1 className="heading--primary">Our ways of working</h1>
              <h3 className="heading--tertiary">
                Our assets – IT and internet
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                rem quaerat neque, maiores fuga impedit distinctio. Quod minus
                sed cumque iusto doloremque voluptatum accusamus sit excepturi
                dolor deleniti laboriosam nemo soluta eum eius at, laudantium
                vero perferendis facere neque sequi recusandae maiores quidem
                accusantium non! Officia cupiditate totam atque expedita.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt natus ducimus cupiditate, exercitationem, ipsa suscipit
                dolores recusandae, perspiciatis repellendus amet mollitia ipsum
                excepturi soluta quam voluptas.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                officiis, ex nam qui quisquam officia adipisci nulla
                voluptatibus quae sed magni necessitatibus beatae.
              </p>
              <br />
              <br />
              <h3 className="heading--tertiary">Expenses</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus maiores neque nesciunt exercitationem numquam voluptas
                inventore doloremque veritatis reprehenderit nobis.
              </p>
              <h3 className="heading--tertiary">ISO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                tempora repudiandae aperiam doloribus itaque consectetur in
                possimus eveniet et! Dolorem quas explicabo voluptate. Fugit,
                quaerat aliquam tenetur sit consectetur commodi, neque dicta
                porro, dolore molestiae veritatis recusandae corrupti
                repudiandae voluptatibus?
              </p>
            </div>
          </ContentContainer>

          {/* Banner */}
          {/*  */}
          <div className="banner">
            <div className="banner-container">
              <Banner
                modifier="banner-ways-working"
                styleClass="content-container__container--2col"
              >
                <div className="text-container--1col text-container--white-bg text-container--small-text-container">
                  <h3 className="">Guides and Commitments</h3>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsa odio eos aperiam aliquam est. Veritatis, numquam
                    aspernatur? Ipsam eos voluptas atque sapiente fuga
                    laboriosam quia! Blanditiis quia exercitationem, at
                    distinctio culpa enim ea dolorum perferendis!
                  </p>
                  <CTAButton
                    modifier="primary"
                    destination="./home"
                    text="PX Hub"
                    htmlTag="button"
                  />
                </div>
                <div></div>
              </Banner>
            </div>
          </div>

          <ContentContainer>
            <ScrollToTopButton parentContainer={pageRef} />
          </ContentContainer>
        </main>
      </div>
    </div>
  );
};

export default Working;
