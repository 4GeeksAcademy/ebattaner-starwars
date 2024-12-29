import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (id, name, type) => {
    setFavorites((prev) => [...prev, { id, name, type }]);
  };

  const removeFavorite = (id, type) => {
    setFavorites((prev) =>
      prev.filter((fav) => fav.id !== id || fav.type !== type),
    );
  };

  const isFavorited = (id, type) => {
    return favorites.some((fav) => fav.id === id && fav.type === type);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorited }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
