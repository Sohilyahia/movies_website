import { createContext, useContext, useEffect, useReducer } from "react";
// Import Reducer Function
import { reducer } from "./reducer";

// Initial state of Context
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// Creat a Context
export const GlobalContext = createContext(initialState);

// Creat a Context Provider
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // ADD Data To Localstorage
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);
  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        dispatchMovie: dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default ContextProvider;

// export Custom useContext Hook
export const useMovieContext = () => {
  return useContext(GlobalContext);
};
