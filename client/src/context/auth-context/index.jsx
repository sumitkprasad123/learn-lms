import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const authValue = {
    // You can add authentication-related state and functions here
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
