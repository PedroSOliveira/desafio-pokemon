import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

interface DarkThemeProviderProps {
  children: ReactNode;
}

interface DarkThemeContextData {
  isDarkTheme: boolean;
  setDarkTheme: () => void;

}

const DarkThemeContext = createContext<DarkThemeContextData>(
  {} as DarkThemeContextData
);

export function DarkThemeProvider({ children }: DarkThemeProviderProps) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {}, [isDarkTheme]);

  const setDarkTheme = ( ) => {
    setIsDarkTheme(!isDarkTheme);
  };


  return (
    <DarkThemeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
}

export function useDarkTheme() {
  const context = useContext(DarkThemeContext);

  return context;
}

