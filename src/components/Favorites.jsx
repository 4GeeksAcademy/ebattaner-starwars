import React, { useState } from "react";

export const FavoritesContext = React.createContext({
  favorites: [],
  setFavorites: () => {},
  deleteFavorites: (id, type) => {},
  addToFavorites: (id, name, type) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const deleteFavorites = (id, type) => {
    setFavorites(
      favorites.filter((favorite) => {
        return !(favorite.id === id && favorite.type === type);
      }),
    );
  };

  const addToFavorites = (id, name, type) => {
    setFavorites([
      ...favorites,
      {
        id: id,
        name: name,
        type: type,
      },
    ]);
  };

  console.log(favorites);
  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, addToFavorites, deleteFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
