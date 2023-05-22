  import { useState, useEffect, createContext } from "react";
  import axios from "axios";

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
