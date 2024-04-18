import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { ITranslations, LANGUAGE } from "../utils/translations";
import { Video, Videos, createClient } from "pexels";
import { PEXELES_API_KEY } from "../utils/pexels";
import { useNavigate } from "react-router-dom";

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
  activeMenuText: string;
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
  videos: Video[];
  isFetchingVideos: boolean;
  videoToWatch: number;
  setVideoToWatch: Dispatch<SetStateAction<number>>;
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

const client = createClient(PEXELES_API_KEY);

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [language, setLanguage] = useState<"english" | "french">("english");
  const [searchBarText, setSearchBarText] = useState("");
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  const [activeMenuText, setActiveMenuText] = useState("Home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [videos, setVideos] = useState<Video[]>([]);
  const [isFetchingVideos, setIsFetchingVideos] = useState(false);
  const [videoToWatch, setVideoToWatch] = useState<number>(0);

  let navigate = useNavigate();

  useEffect(() => {
    if (videoToWatch !== 0) {
      navigate(`/${videoToWatch}`);
    }
  }, [videoToWatch]);

  useEffect(() => {
    fetchVideos(activeCategory);
  }, [activeCategory, searchBarText]);
  useEffect(() => {
    fetchVideos(searchBarText);
  }, [searchBarText]);

  const fetchVideos = async (query: string) => {
    setIsFetchingVideos(true);
    try {
      const response = await client.videos.search({
        query,
        per_page: 44,
      });
      setVideos((response as Videos).videos);
      console.log("RESPONSE", (response as Videos).videos);
    } catch (error) {
      console.log("THERE WAS AN ERROR FETCHIN VIDEOS");
    }
    setIsFetchingVideos(false);
  };
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
    activeMenuText,
    activeCategory,
    setActiveCategory,
    videos,
    isFetchingVideos,
    videoToWatch,
    setVideoToWatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
