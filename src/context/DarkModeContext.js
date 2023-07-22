import { useContext } from "react";

const { createContext } = require("react");
const { useState } = require("react");

const darkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [dark, setDark] = useState();
  function darkModeHandler() {
    setDark((prev) => !prev);
    console.log(dark);
  }
  return (
    <darkModeContext.Provider value={{ dark, darkModeHandler }}>
      {children}
    </darkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(darkModeContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { useDarkMode, DarkModeProvider };
