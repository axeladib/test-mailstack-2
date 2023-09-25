//TODO: Boilerplate for contextAPI for state management
// eslint-disable-next-line no-unused-vars
import {useEffect,useState, useContext, createContext} from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line no-unused-vars, react/prop-types
const AuthProvider = ({children})=>{
  // eslint-disable-next-line no-unused-vars
  const [user,setUser] = useState(null)

  return (<AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}

export default AuthProvider;