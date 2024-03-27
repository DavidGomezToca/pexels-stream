import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ITranslations, LANGUAGE } from "../utils/translations";

interface IAppContextValue {
  theme: "light" | "dark";
  language: "english" | "french";
  toggleTheme: () => void;
  toggleLanguage: () => void;
  text: ITranslations;
  searchBarText: string;
  setSearchBarText: Dispatch<SetStateAction<string>>;
  isMenuSmall: boolean;
  toggleMenuSize: () => void;
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
  const [language, setLanguage] = useState<"english" | "french">("english");
  const [searchBarText, setSearchBarText] = useState("");
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };
  const toggleLanguage = () => {
    setLanguage((language) => (language === "english" ? "french" : "english"));
  };
  const toggleMenuSize = () => {
    setIsMenuSmall((state) => !state);
  };
  const value = {
    theme,
    language,
    toggleTheme,
    toggleLanguage,
    text: LANGUAGE[language],
    searchBarText,
    setSearchBarText,
    isMenuSmall,
    toggleMenuSize,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
