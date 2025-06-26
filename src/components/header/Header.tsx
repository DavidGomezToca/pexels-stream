import { MouseEventHandler, useEffect, useState } from "react";
import {
  StyledHeader,
  LeftSection,
  SearchSection,
  HeaderMoreSection,
  LogoSection,
  SearchBar,
} from "./Header.styles";
import { Text } from "../../utils/Text.styles";
import { Icon } from "../../utils/Icon.styles";
import { SlMenu } from "react-icons/sl";
import { FaMicrophone, FaYoutube } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import Settings from "../Settings/Settings";
import { useAppContext } from "../../context/App.context";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const { text, setSearchBarText, toggleMenuSize } = useAppContext();
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const { pathname } = useLocation();

  useEffect(() => {
    setSearchText(transcript);
    setSearchBarText(transcript);
  }, [setSearchBarText, transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const isHomePath = pathname.length === 1;

  if (isHomePath) {
    document.title = "PexelsStream";
  }

  return (
    <StyledHeader>
      <LeftSection>
        {window.innerWidth > 1200 && (
          <Icon
            className={`${!isHomePath && "disabled"}menu`}
            onClick={() => toggleMenuSize()}
          >
            <SlMenu size={17} />
          </Icon>
        )}
        <LogoSection to="/">
          <FaYoutube color="#FF0000" size={30} />
          {window.innerWidth >= 650 && (
            <Text className="logo">PexelsStream</Text>
          )}
        </LogoSection>
      </LeftSection>
      <SearchSection>
        <SearchBar className={window.innerWidth <= 400 ? "amplified" : ""}>
          <input
            id="search-bar-input"
            value={searchText}
            placeholder={text.search}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Icon
            className={window.innerWidth <= 400 ? "invisible" : ""}
            data-tooltip-id="search"
            data-tooltip-content={text.search}
            onClick={() => setSearchBarText(searchText)}
          >
            <LuSearch size={19} />
          </Icon>
        </SearchBar>
        <Icon
          data-tooltip-id="voiceSearch"
          data-tooltip-content={text.voiceSearch}
          onClick={
            SpeechRecognition.startListening as MouseEventHandler<HTMLDivElement>
          }
          $showBackground
          className={listening ? "listening" : ""}
        >
          <FaMicrophone size={19} />
        </Icon>
      </SearchSection>
      <HeaderMoreSection>
        <Settings />
      </HeaderMoreSection>
    </StyledHeader>
  );
};

export default Header;
