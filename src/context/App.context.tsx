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
import { useAppDispatch, useAppSelector } from "../store/store";
import { changeTheme } from "../store/app.slice";

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
  videoToWatchData: Video | undefined;
  fetchVideo: (id: string) => Promise<void>;
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
  const [language, setLanguage] = useState<"english" | "french">("english");
  const [searchBarText, setSearchBarText] = useState("");
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeMenuText, setActiveMenuText] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [videos, setVideos] = useState<Video[]>([]);
  const [isFetchingVideos, setIsFetchingVideos] = useState(false);
  const [videoToWatch, setVideoToWatch] = useState<number>(0);
  const [videoToWatchData, setVideoToWatchData] = useState<Video>();
  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  useEffect(() => {
    if (videoToWatch !== 0) {
      navigate(`/${videoToWatch}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    } catch (error) {}
    setIsFetchingVideos(false);
  };
  const fetchVideo = async (id: string) => {
    setIsFetchingVideos(true);
    try {
      const response = await client.videos.show({
        id,
      });
      setVideoToWatchData(response as Video);
    } catch (error) {}
    setIsFetchingVideos(false);
  };
  const toggleTheme = () => {
    dispatch(changeTheme());
  };
  const toggleLanguage = () => {
    setLanguage((language) => (language === "english" ? "french" : "english"));
  };
  const toggleMenuSize = () => {
    setIsMenuSmall((state) => !state);
  };

  const value = {
    theme: useAppSelector((state) => state.app.theme),
    language,
    toggleTheme,
    toggleLanguage,
    text: LANGUAGE[language],
    searchBarText,
    setSearchBarText,
    isMenuSmall,
    toggleMenuSize,
    activeMenuText: LANGUAGE[language][activeMenuText as keyof ITranslations],
    activeCategory,
    setActiveCategory,
    videos,
    isFetchingVideos,
    videoToWatch,
    setVideoToWatch,
    videoToWatchData,
    fetchVideo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
