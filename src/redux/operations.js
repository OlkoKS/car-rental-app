import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = new URL(
  "https://652e5f580b8d8ddac0b141f2.mockapi.io/api/v1/adverts"
);

export const carsListThunk = createAsyncThunk(
  "cars",
  async (filter, thunkAPI) => {
    const { page, carBrand } = filter;
    try {
      let queryParams = { limit: 12, page: 1 };

      if (carBrand.value === "all") {
        queryParams = {
          limit: 12,
          page: `${page}`,
        };
      }

      if (carBrand.value !== "all") {
        queryParams = { limit: 12, page: 1, make: `${carBrand.value}` };
      }

      const query = new URLSearchParams({ ...queryParams }).toString();

      const { data } = await axios.get(`${BASE_URL}?${query}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
