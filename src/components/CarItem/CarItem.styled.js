import styled from "styled-components";

export const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const CarItemWrapper = styled.div`
  > p {
    margin: 0;
    font-size: 6px;
  }

  > div {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const CardImgWrapper = styled.div`
  > img {
    width: 274px;
  }
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  margin-top: 14px;
  margin-left: 240px;
  width: 20px;
  height: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  transition: all 0.1s linear;

  img {
    width: 18px;
    height: 18px;
  }

  &:hover {
    scale: 1.2;
  }
`;

export const ModalItemWrapper = styled.div`
  width: 541px;
  height: 752px;
`;
