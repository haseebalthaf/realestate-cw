import { useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (property) => {
    const isAlreadyAdded = favorites.some(
      (favorite) => favorite.id === property.id
    );

    if (!isAlreadyAdded) {
      setFavorites((prevFavorites) => [...prevFavorites, property]);
    } else {
      window.alert("Already added to favorites!");
    }
  };

  const removeFromFavorites = (propertyId) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== propertyId
    );
    setFavorites(updatedFavorites);
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return { favorites, addToFavorites, removeFromFavorites, clearFavorites };
};
