import React, { createContext, useState } from "react";

export const CurrentUserContext = createContext();

//Component allows state to update in context
export const CurrentUserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  return (
    <CurrentUserContext.Provider value={{ name, id, setName, setId }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
