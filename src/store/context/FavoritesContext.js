import React from "react";

const FavoritesContext = React.createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [ids, setIds] = React.useState([]);

  const addFavorite = React.useCallback(
    (id) => {
      setIds((prev) => [...prev, id]);
    },
    [ids, setIds]
  );

  const removeFavorite = React.useCallback(
    (id) => {
      setIds((prev) => prev.filter((currentId) => id !== currentId));
    },
    [ids, setIds]
  );

  return (
    <FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavoritesContext = () => {
  const { ids, addFavorite, removeFavorite } =
    React.useContext(FavoritesContext);

  const isMealFavorite = React.useCallback(
    (id) => {
      return ids.includes(id);
    },
    [ids]
  );

  const toggleFavorite = React.useCallback(
    (id) => {
      if (isMealFavorite(id)) {
        removeFavorite(id);
      } else addFavorite(id);
    },
    [isMealFavorite, removeFavorite, addFavorite]
  );

  const getFavoritesList = React.useCallback(
    (list) => {
      return list.filter(({ id }) => ids.includes(id));
    },
    [ids]
  );

  const appendFavoriteKey = React.useCallback(
    (list) => {
      return list.map((item) => ({
        ...item,
        isFavorite: ids.includes(item.id),
      }));
    },
    [ids]
  );

  return {
    isMealFavorite,
    toggleFavorite,
    getFavoritesList,
    appendFavoriteKey,
  };
};

export default FavoritesContextProvider;
