import React, { createContext, useState, useEffect } from "react";
const context = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/user")
    .then(res => res.json())
    .then(data=> setUser(data))
    .catch(err => {
        console.log(err);
    });          
    
  }, []);

  return (
      <context.Provider value={user}>
          {children}
      </context.Provider>
  );
};

UserProvider.context = context;

export default UserProvider;