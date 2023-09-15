/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useMemo, useReducer, useEffect } from "react";

export const ContextGlobal = createContext({});

const initialState = {
  theme: localStorage.getItem('theme') || "light",
  data: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload };
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme);
      return { ...state, theme: newTheme };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
