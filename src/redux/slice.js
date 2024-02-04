import { createSlice } from "@reduxjs/toolkit";
import { carsListThunk } from "./operations";

const initialState = {
  makes: [],
  cars: [],
  favorites: [],
  isLoading: false,
  error: null,
  loadButton: true,
  isOpenModal: false,
  filter: {
    page: 1,
    carBrand: { value: "all", label: "All" },
    price: { value: "all", label: "All" },
    isChanged: false,
    isReload: false,
  },
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (carItem) => carItem.id !== payload.id
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(carsListThunk.pending, handlePending)
      .addCase(carsListThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        if (state.filter.carBrand.value !== "all") {
          state.cars = payload;
          state.filter.isChanged = true;
        }

        if (
          state.filter.carBrand.value === "all" &&
          state.filter.isChanged === true
        ) {
          state.cars = payload;
          state.filter.isReload = true;
        } else if (
          state.filter.carBrand.value === "all" &&
          state.filter.isChanged === true &&
          state.filter.isReload === true
        ) {
          state.cars.push(...payload);
        }

        if (state.filter.isChanged === false) {
          state.cars.push(...payload);
        }

        if (payload.length < 12) {
          state.loadButton = false;
        } else {
          state.loadButton = true;
        }
      })
      .addCase(carsListThunk.rejected, handleRejected),
});

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const carsReducer = carsSlice.reducer;
export const { setFilter, setFavorite, removeFavorite } = carsSlice.actions;
