import { createContext, useContext, useEffect, useReducer } from "react";

export const ContextGolbalReduce = createContext();

export const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
  dentist: [],
  favs: JSON.parse(localStorage.getItem('favs')) || [],
  getDentistById: async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }, 
};

const objectReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      const newDarkMode = !state.darkMode;
      localStorage.setItem('darkMode', newDarkMode)
      return {
        ...state,
        darkMode: newDarkMode
      };
    case "GET_DENTIST":
      return {
        ...state,
        dentist: action.payload,
      };
    case "TOGGLE_FAVORITE":
      const id = action.payload;
      const isFavorite = state.favs.includes(id);
      const newFavs = isFavorite
      ? state.favs.filter((favId) => favId !== id)
      : [...state.favs, id];
      localStorage.setItem('favs', JSON.stringify(newFavs))
      return {
        ...state,
        favs: newFavs
      };
    default:
      return state;
  }
};

export const ContextProviderReduce = ({ children }) => {
  const [state, dispatch] = useReducer(objectReducer, initialState);

  useEffect(() => {
    async function getDent() {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "GET_DENTIST", payload: data });
    }
    getDent();
  }, []);

  let data = { state, dispatch };

  return (
    <ContextGolbalReduce.Provider value={data}>
      {children}
    </ContextGolbalReduce.Provider>
  );
};

export const useGlobalReduceStates = () => useContext(ContextGolbalReduce);
