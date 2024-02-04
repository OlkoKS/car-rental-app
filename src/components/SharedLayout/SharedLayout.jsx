import { Suspense } from "react";
import {
  HeaderSection,
  HeaderWrapper,
  Navigation,
  PagesNav,
  StyledLink,
} from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Loader } from "../index";

export const SharedLayout = () => {
  return (
    <>
      <HeaderSection>
        <HeaderWrapper>
          <nav>
            <Navigation>
              <StyledLink to="/">
                <span>CarRent</span>
              </StyledLink>
              <PagesNav>
                <StyledLink to="/catalog">Catalog</StyledLink>
                <StyledLink to="/favorites">Favorites</StyledLink>
              </PagesNav>
            </Navigation>
          </nav>
          <Suspense fallback={<Loader />}>
            <Outlet></Outlet>
          </Suspense>
        </HeaderWrapper>
      </HeaderSection>
    </>
  );
};
