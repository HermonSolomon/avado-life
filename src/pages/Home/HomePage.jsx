import { Link } from "react-router-dom";

// Components
import ContentContainer from "../../layouts/ContentContainer/ContentContainer";
import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../layouts/Logo/Logo";
import Video from "../../components/VideoContainer/Video";
// Buttons
import PDFButton from "../../components/Buttons/PDFButton";
import LargeButton from "../../components/Buttons/LargeButton";
// Nav items data
import MenuItems from "../../components/NavBar/MenuItems";
// Custom hooks
import { useMediaQuery } from "../../custom-hooks/useMediaQuery";
// Assets
import VideoAsset from "../../assets/videos/video.mp4";

const HomePage = () => {
   let desktopView = useMediaQuery("(min-width: 1024px)");
   const largeButtonsList = MenuItems.map((item) => (
      <li key={item.title}>
         <Link to={item.path}>
            <LargeButton title={item.title} image={item.img} />
         </Link>
      </li>
   ));

   return (
      <div className="page page--font-light home-page">
         <div className="page__inner">
            {desktopView && (
               <ContentContainer styleClass="flex-sb">
                  <Logo logoStyle="darkGreen" modifier="small" />
                  <PDFButton />
               </ContentContainer>
            )}
            {!desktopView && <NavBar />}
            <ContentContainer styleClass="content-container__container--2col">
               <div className="text--1col">
                  <h1 className="heading--primary">Welcome to Avado! </h1>
                  <p>
                     Thank you for choosing to work at Avado; we know you’ll
                     help us fulfill our Purpose of Unlocking potential and
                     changing lives. Whether you are with us for a short or long
                     time, you’ll be working with us on helping our clients and
                     learners create real change, by supporting in your own way
                     to deliver amazing learning experiences.
                  </p>
                  <p>
                     This interactive is designed to bring all this – and more –
                     to life for you, with the aim of helping you on your
                     exciting journey with us. It is insight into working life
                     with Avado, which offers a hybrid workplace that blends
                     meaningful challenges with smart, inclusive-minded people.
                     We can’t wait to see what you bring to us and take from
                     your experience.
                  </p>
               </div>
               <Video video={VideoAsset} />
            </ContentContainer>
            {desktopView && (
               <ContentContainer>
                  <nav>
                     <ul className="large-buttons-container">
                        {largeButtonsList}
                     </ul>
                  </nav>
               </ContentContainer>
            )}
         </div>
      </div>
   );
};

export default HomePage;
