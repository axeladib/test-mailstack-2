/* eslint-disable no-unused-vars */
//TODO: Boilerplate for contextAPI for state management
// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useContext, createContext } from "react";
import { supabase } from "../helpers/supabase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const login = (email, password) => {
  supabase.auth.signInWithPassword({ email, password });
};
// eslint-disable-next-line no-unused-vars, react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  //TODO: Setup the user login auth that return "session"
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      }
    });
    return () => {
      //TODO: Create the function from the result of auth event changes to prevent the leakage of the storage or data
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
