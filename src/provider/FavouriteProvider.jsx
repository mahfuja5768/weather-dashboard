import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const { favourites, setFavourites } = useLocalStorage("favourites, []");
  const addToFavourites = (location, longitude, latitude) => {
    setFavourites(...favourites, {
      latitude,
      location,
      longitude,
    });
  };

  const removeFromFavourites = (location) => {
    const restFavs = favourites.filter((fav) => fav.location !== location);
    setFavourites(restFavs);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
