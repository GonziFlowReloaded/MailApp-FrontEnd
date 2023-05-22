//@ts-nocheck
  
  import { useState, createContext } from "react";

 

  const AuthContext = createContext();

  const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});

  
    return (
      <AuthContext.Provider
        value={{
          setAuth,
          auth,
        
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  export { AuthProvider };

  export default AuthContext;
