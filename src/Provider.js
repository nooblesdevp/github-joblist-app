import React, { createContext, useContext, useReducer, useState } from "react";

export const UserContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);
export const useStateValue = () => useContext(UserContext);

// const Provider = ({ children }) => {
//   const [user, setUser] = useState();
//   const [jobs, setJobs] = useState();
//   const [error, setError] = useState();
//   const [loading, setLoading] = useState(false);

//   return (
//     <UserContext.Provider value={{ user, jobs, error, loading }}>
//       {children}
//     </UserContext.Provider>
//   );

// };

// export { Provider };
