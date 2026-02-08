import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [menu, setMenu] = useState(false);
  
  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMenu() {
    const context = useContext(MenuContext)

    if (!context) {
        throw new Error('Missing Providers')
    }

    return context
}
