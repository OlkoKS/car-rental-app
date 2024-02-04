import Select from "react-select";
import {
  brandSelectStyles,
  carsSelectTheme,
  priceSelectStyles,
} from "./CarSelectStyles";
import { CarFiltersContainer, LabelText } from "./CarFilters.styled";
import brands from "../../data/makes.json";
import prices from "../../data/prices.json";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from "../../redux/slice";

const toUpperCaseFirstLetter = (string) => {
  const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
  return newString;
};

export const CarFilters = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const { carBrand, price } = filter;

  const carBrands = brands.map((brand) => ({
    value: brand,
    label: toUpperCaseFirstLetter(brand),
  }));

  const carPrices = prices.map((price) => ({
    value: price,
    label: toUpperCaseFirstLetter(price),
  }));

  const carBrandsList = [{ value: "all", label: "All" }, ...carBrands];

  const carPricesList = [{ value: "all", label: "All" }, ...carPrices];

  const handleBrandSelect = (e) => {
    console.log(e);
    dispatch(setFilter({ ...filter, page: 1, carBrand: e }));
  };

  const handlePriceSelect = (e) => {
    console.log(e);
    dispatch(setFilter({ ...filter, price: e }));
  };

  return (
    <>
      <CarFiltersContainer>
        <LabelText>
          Car brand
          <Select
            name="carBrand"
            value={carBrand}
            onChange={handleBrandSelect}
            options={carBrandsList}
            placeholder="Enter the text"
            styles={brandSelectStyles}
            theme={carsSelectTheme}
          ></Select>
        </LabelText>
        <LabelText>
          Price/ 1 hour
          <Select
            name="carPrice"
            value={price}
            options={carPricesList}
            placeholder="To $"
            onChange={handlePriceSelect}
            styles={priceSelectStyles}
            theme={carsSelectTheme}
          ></Select>
        </LabelText>
      </CarFiltersContainer>
    </>
  );
};
