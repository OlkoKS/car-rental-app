import { useDispatch, useSelector } from "react-redux";
import {
  CarItemWrapper,
  CardImgWrapper,
  FavoriteBtn,
  ModalItemWrapper,
  customStyles,
} from "./CarItem.styled";
import { selectFavorites } from "../../redux/selectors";
import { removeFavorite, setFavorite } from "../../redux/slice";
import { useState } from "react";
import heart from "../../images/heart.png";
import heartBlue from "../../images/heart_blue.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const CarItem = (carItem) => {
  const {
    id,
    description,
    engineSize,
    fuelConsumption,
    functionalities,
    img,
    make,
    mileage,
    model,
    year,
    rentalPrice,
    address,
    rentalConditions,
    type,
    accessories,
    rentalCompany,
  } = carItem;

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteCars = useSelector(selectFavorites);

  const dispatch = useDispatch();

  const includedInFavorites = (id) => {
    let favoriteItems = [];
    favoriteCars.map((car) => favoriteItems.push(car.id));
    return favoriteItems.includes(id);
  };

  const handleAddToFavorites = (carItem) => {
    setIsFavorite(!isFavorite);
    if (!includedInFavorites(carItem.id)) {
      dispatch(setFavorite(carItem));
    } else {
      dispatch(removeFavorite(carItem));
    }
  };

  const onOpenModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <CarItemWrapper>
      <FavoriteBtn
        type="button"
        onClick={() => {
          handleAddToFavorites(carItem);
        }}
      >
        {!isFavorite ? (
          <img src={heart} alt="heart" />
        ) : (
          <img src={heartBlue} alt="heartBlue" />
        )}
      </FavoriteBtn>
      <CardImgWrapper>
        <img src={img} loading="lazy" alt={make} title={make} />
      </CardImgWrapper>
      <div>
        <p>{id}</p>
        <p>{make}</p>
        <p>{model}</p>
        <p>{year}</p>
        <p>{rentalPrice}</p>
        <p>{address}</p>
        <p>{rentalCompany}</p>
        <p>{type}</p>
        <p>{accessories}</p>
      </div>
      <button type="button" onClick={onOpenModal}>
        Learn more
      </button>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={onCloseModal}
        style={customStyles}
      >
        <ModalItemWrapper>
          <div>
            <button type="button" onClick={onCloseModal}>
              X-icon
            </button>
            <div>
              <img src={img} loading="lazy" alt={make} title={make} />
            </div>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
            <p>{address}</p>
            <p>id:{id}</p>
            <p>Year:{year}</p>
            <p>Type:{type}</p>
            <p>Fuel Consumption:{fuelConsumption}</p>
            <p>Engine Size:{engineSize}</p>
            <p>{description}</p>
            <p>Accessories and functionalities:</p>
            <p>{accessories}</p>
            <p>{functionalities}</p>
            <p>Rental Conditions:{rentalConditions}</p>
            <p>Mileage:{mileage}</p>
            <p>Price:{rentalPrice}</p>
            <button href="tel:+380730000000">Rental car</button>
          </div>
        </ModalItemWrapper>
      </Modal>
    </CarItemWrapper>
  );
};
