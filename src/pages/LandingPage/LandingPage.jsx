// Components
import Logo from "../../layouts/Logo/Logo";
import ContentContainer from "../../layouts/ContentContainer/ContentContainer";
// Buttons
import CTAButton from "../../components/Buttons/CTAButton";
const LandingPage = () => {
  return (
    <div id="landing-page" className="page page--font-dark landing-page">
      <div className="page__inner">
        <ContentContainer>
          <div className="lp-content flex-column">
            <Logo logoStyle="dark" modifier="large" />
            <p className="heading--center">
              A simple yet immersive look into life at Avado...
            </p>
            <CTAButton
              modifier="primary"
              destination="./home"
              text="Begin"
              htmlTag="link"
            />
          </div>
        </ContentContainer>
      </div>
    </div>
  );
};

export default LandingPage;
