"use client";
import React, { createContext, useState } from "react";

interface AppContextProps {
  cartVisible: boolean;
  toggleCartVisible: (visible: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  cartVisible: false,
  toggleCartVisible: () => {},
});

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  const toggleCartVisible = (visible: boolean) => {
    setCartVisible(visible);
  };

  return (
    <AppContext.Provider value={{ cartVisible, toggleCartVisible }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return React.useContext(AppContext);
}

export default AppProvider;
