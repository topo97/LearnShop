import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Usamos sessionStorage: la sesión muere cuando el usuario cierra la pestaña
  const [isAdmin, setIsAdmin] = useState(() => {
    const savedStatus = sessionStorage.getItem("isAdmin");
    return savedStatus === "true"; 
  });

  const login = (user, pass) => {
    // Es recomendable usar variables de entorno para esto en el futuro
    if (user === "admin" && pass === "1234") {
      setIsAdmin(true);
      sessionStorage.setItem("isAdmin", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem("isAdmin");
    // Opcional: limpiar todo para mayor seguridad
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);