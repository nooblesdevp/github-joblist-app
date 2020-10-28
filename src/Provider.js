import React, { createContext, useContext, useReducer, useState } from "react";

export const UserContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);
export const useStateValue = () => useContext(UserContext);
