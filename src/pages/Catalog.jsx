import { useDispatch, useSelector } from "react-redux";
import { CarFilters, CarList, Loader, NoResultsInfo } from "../components";
import {
  selectCarsByPrice,
  selectCarsList,
  selectFilter,
  selectIsLoading,
  selectLoadButton,
} from "../redux/selectors";
import { useEffect } from "react";
import { carsListThunk } from "../redux/operations";
import { setFilter } from "../redux/slice";
import { LoadMoreButton } from "./styles.styled";

const Catalog = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);
  const { price } = filter;
  const carsListCatalog = useSelector(selectCarsList);
  const carsByPrice = useSelector(selectCarsByPrice);
  const loadButton = useSelector(selectLoadButton);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(
      carsListThunk({
        page: filter.page,
        carBrand: filter.carBrand,
      })
    );
  }, [dispatch, filter]);

  let carsListByPrice = [];
  if (price.value !== "all") {
    carsListByPrice = [...carsByPrice];
  } else {
    carsListByPrice = [...carsListCatalog];
  }

  const handleClickLoad = () => {
    dispatch(setFilter({ ...filter, page: filter.page + 1 }));
  };

  return (
    <>
      <CarFilters />
      {isLoading && <Loader />}
      {carsListByPrice.length === 0 ? (
        <NoResultsInfo />
      ) : (
        <CarList cars={carsListByPrice} />
      )}
      {loadButton && (
        <LoadMoreButton type="button" onClick={handleClickLoad}>
          Load more
        </LoadMoreButton>
      )}
    </>
  );
};

export default Catalog;
