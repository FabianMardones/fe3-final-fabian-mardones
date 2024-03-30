// Context.js
import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

export const initialState = {
  theme: false,
  datos: [],
  favoriteIds: [],
  getDentistById: () => {}
};


export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [datos, setDatos] = useState(initialState.datos);
  const [favoriteIds, setFavoriteIds] = useState(initialState.favoriteIds);


  async function getDentistById(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  function toggleTheme() {
    if (theme === "dark") {
      return setTheme("light");
    }
    setTheme("dark");
  }

  async function getDent() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    const response = await fetch(url);
    const data = await response.json();
    setDatos(data);
  }

  useEffect(() => {
    getDent();
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      datos,
      favoriteIds,
      getDentistById,
      toggleTheme,
      setFavoriteIds
    }),
    [theme, datos, favoriteIds]
  );


  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () => useContext(ContextGlobal);
