import { CarItem } from "../index";
import { nanoid } from "nanoid";
import { CarItemWrapper, CarListWrapper } from "./CarList.styled";

export const CarList = ({ cars }) => {
  return (
    <>
      <CarListWrapper>
        {cars.map((car) => {
          return (
            <CarItemWrapper key={nanoid()}>
              <CarItem
                id={car.id}
                img={car.img}
                make={car.make}
                model={car.model}
                year={car.year}
                rentalPrice={car.rentalPrice}
                address={car.address}
                rentalCompany={car.rentalCompany}
                type={car.type}
                accessories={car.accessories}
              />
            </CarItemWrapper>
          );
        })}
      </CarListWrapper>
    </>
  );
};
