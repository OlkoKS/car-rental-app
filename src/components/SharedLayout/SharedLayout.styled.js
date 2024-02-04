import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  height: 112px;
  background-color: rgb(83, 127, 228);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  width: 1184px;
`;

const Navigation = styled.div`
  width: 100%;
  padding-left: 128px;
  padding-right: 128px;
  padding: 32px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PagesNav = styled.div`
  display: flex;
  gap: 40px;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  gap: 5px;
  text-decoration: none;
  font-weight: 600;
  font-size: 32px;
  color: rgb(255, 255, 255);
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.01);
  }

  &.active {
    text-decoration: underline;
    text-underline-offset: 10px;
  }
`;

export { Navigation, PagesNav, StyledLink };
