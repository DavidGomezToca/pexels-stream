import { ReactNode, createContext, useContext, useState } from "react";

interface IAppContextValue {
  theme: "light" | "dark";
}

const AppContext = createContext<IAppContextValue | null>(null);

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("There is no context");
  }
  return appContext;
};

interface IAppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const value = {
    theme,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
