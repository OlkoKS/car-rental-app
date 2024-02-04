import styled from "styled-components";
import homepage from "../../images/car_rent_bground.jpg";

export const HeroSection = styled.div`
  width: 1184px;
  height: 800px;
  padding-left: 0;
  padding-right: 0;
  background-image: url(${() => homepage});
  background-size: 1440px 800px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroWrapper = styled.div`
  width: 1184px;
  margin: 1px auto;
`;

export const TitleWrapper = styled.h1`
  text-align: center;
  padding-top: 80px;
  font-weight: 800;
  font-size: 54px;
  color: rgb(43, 89, 194);
`;

export const HeroButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 10px 40px;
  border-radius: 10px;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(52, 112, 255);
  background-color: rgb(83, 127, 228);
  color: rgb(255, 255, 255);
  font-size: 18px;
  line-height: 1.29;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    transform: scale(1.01);
  }
`;
