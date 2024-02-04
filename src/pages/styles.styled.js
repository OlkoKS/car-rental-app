import styled from "styled-components";

export const LoadMoreButton = styled.button`
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
