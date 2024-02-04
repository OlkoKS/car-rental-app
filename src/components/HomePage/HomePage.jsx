import { useNavigate } from "react-router-dom";
import {
  HeroButton,
  HeroSection,
  HeroWrapper,
  TitleWrapper,
} from "./HomePage.styled";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroSection>
        <HeroWrapper>
          <TitleWrapper>Car Hire - Search, Compare & Save</TitleWrapper>
          <HeroButton onClick={() => navigate("/catalog")}>
            Choose car
          </HeroButton>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};
