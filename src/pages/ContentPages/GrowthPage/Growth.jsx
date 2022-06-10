import React from "react";
import { useRef } from "react";
// Components
import ContentContainer from "../../../layouts/ContentContainer/ContentContainer";
import NavBar from "../../../components/NavBar/NavBar";
import Banner from "../../../layouts/Banner/Banner";
// Buttons
import ScrollToTopButton from "../../../components/Buttons/ScrollToTopButton";
// Assets
import cornerDecor from "../../../assets/imgs/growth-page/bottom-illustration.png";

const Growth = () => {
  const pageRef = useRef(null);

  return (
    <div
      ref={pageRef}
      className="page page-book base-page-culture page--font-dark"
    >
      <div className="page-inner">
        <header id="page-three-top" className="header">
          <div className="background-image--growth"></div>
          <NavBar />
          <div className="hero">
            <div className="hero__container hero__container--growth-inner-bg">
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
              <h1 className="heading--primary">Your growth and development</h1>
              <h3 className="heading--tertiary">Internal vacancies</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sed
                debitis omnis vitae culpa repellendus sequi illo molestiae et
                porro ut praesentium quo nesciunt, laborum eveniet fugit nisi
                magni quasi ratione itaque corrupti incidunt nostrum? Numquam
                temporibus dignissimos blanditiis, quas deleniti quaerat at
                quia, tempora laborum qui aliquid consectetur. Doloremque
                excepturi quia beatae ullam in culpa nostrum cupiditate maiores
                commodi!
              </p>
              <br />
              <br />
              <br />
              <h3 className="heading--tertiary">Secondments</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium debitis, laboriosam omnis asperiores id placeat ipsam
                nesciunt quam distinctio consequatur blanditiis pariatur fuga
                neque fugit mollitia cupiditate tempora nihil eius a excepturi
                et! Animi nostrum et ad quasi quia sapiente veritatis eligendi.
                Dolor excepturi est nulla! Soluta nisi tempora animi molestiae
                praesentium in excepturi magnam quidem eius non sint deleniti
                voluptatem.
              </p>
            </div>
          </ContentContainer>

          <div className="banner">
            <div className="banner-container">
              <Banner
                modifier="banner-growth-secondary"
                styleClass="content-container__container--2col"
              >
                <div className="text-container--1col text-container--bg-none">
                  <p className="">
                    <h3 className="heading--light">Our products</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique vitae asperiores placeat dolorum debitis cumque
                    quisquam animi sequi praesentium quibusdam architecto,
                    fugiat, consequuntur sapiente. Cum suscipit, saepe non
                    itaque repudiandae sed accusantium, iusto eius nam animi
                    omnis quos expedita laboriosam!
                  </p>
                </div>
                <div></div>
              </Banner>
            </div>
          </div>

          <ContentContainer>
            <div className="text-container--2col">
              <h3 className="heading--tertiary">
                Objectives and key results (OKRs)
              </h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus commodi itaque, nobis facere cumque dolor odit
                similique dolore ipsam, alias aut fugit fugiat praesentium
                excepturi, esse perferendis odio eos laborum accusantium ab
                totam. Ipsum nostrum aut omnis repellat. Aliquid pariatur
                excepturi eius nobis doloremque sequi minus sapiente soluta quis
                magnam.
              </p>

              <h3 className="heading--tertiary">Coaching</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perspiciatis quae velit, sit soluta enim accusantium maxime quia
                perferendis nesciunt, dolor voluptates praesentium aut voluptate
                in animi consequatur aliquid numquam tenetur libero laudantium
                omnis sequi placeat id ducimus. Sapiente beatae veniam ipsa
                consectetur! A unde numquam doloribus dolorum praesentium
                officiis sed.
              </p>
            </div>
          </ContentContainer>

          <ContentContainer>
            <div className="text-container--2col">
              <h3 className="heading--tertiary">Mentoring/Mentee-ing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                unde voluptatibus ducimus tempore. Odit porro cum nihil ipsam
                reiciendis odio et! Repudiandae natus est minima quas
                recusandae, quos accusamus omnis, nostrum perspiciatis incidunt
                officiis enim unde eos aperiam quis reiciendis.
              </p>
              <div className="corner-image">
                <img src={cornerDecor} alt="" />
              </div>
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

export default Growth;
