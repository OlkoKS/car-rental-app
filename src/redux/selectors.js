import { createSelector } from "@reduxjs/toolkit";

export const selectCarsMakes = (state) => state.cars.makes;
export const selectCarsList = (state) => state.cars.cars;
export const selectFavorites = (state) => state.cars.favorites;
export const selectPage = (state) => state.cars.page;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectLoadButton = (state) => state.cars.loadButton;
export const selectIsOpenModal = (state) => state.cars.isOpenModal;
export const selectFilter = (state) => state.cars.filter;

export const selectCarsByPrice = createSelector(
  selectCarsList,
  selectFilter,
  (cars, filter) =>
    cars
      ? cars.filter(
          (car) =>
            Number(car.rentalPrice.split("").slice(1).join("")) <=
            Number(filter.price.value)
        )
      : cars
);
