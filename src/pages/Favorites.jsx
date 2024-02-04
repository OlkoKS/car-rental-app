import { useSelector } from "react-redux";
import { CarList, Loader } from "../components";
import { selectFavorites, selectIsLoading } from "../redux/selectors";

const Favorites = () => {
  const favoriteCarsList = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <CarList cars={favoriteCarsList} />
      {favoriteCarsList.length === 0 && (
        <p>The list of favorite cars is empty</p>
      )}
    </>
  );
};

export default Favorites;
