import React from "react";
import { createContext, useState } from "react";
import App from "./App";

const AppState = createContext();

const Context = () => {
  const [login, setLogin] = useState(true);

  const [active, setActive] = useState('dashboard');

  // console.log(dashboardActive)

  return (
    <>
      <AppState.Provider
        value={{ login, setLogin, active, setActive }}
      >
        <App />
      </AppState.Provider>
    </>
  );
};

export default Context;
export { AppState };
