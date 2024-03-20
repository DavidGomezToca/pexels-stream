import React, { useState } from "react";
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
import AuthButton from "../authButton/AuthButton";
import { CgMoreVerticalAlt } from "react-icons/cg";
import Settings from "../Settings/Settings";
import { useAppContext } from "../../context/App.context";

const Header = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { text, setSearchBarText } = useAppContext();

  return (
    <StyledHeader>
      <LeftSection>
        <Icon className="menu">
          <SlMenu size={17} />
        </Icon>
        <LogoSection to="/">
          <FaYoutube color="#FF0000" size={30} />
          <Text className="logo">YouStream v0.18.0</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>
        <SearchBar>
          <input
            value={searchText}
            placeholder={text.search}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Icon
            data-tooltip-id="voiceSearch"
            data-tooltip-content={text.voiceSearch}
            $showBackground={true}
            onClick={() => setSearchBarText(searchText)}
          >
            <LuSearch size={21} />
          </Icon>
        </SearchBar>
      </SearchSection>
      <HeaderMoreSection>
        <Icon
          data-tooltip-id="settings"
          data-tooltip-content="Settings"
          onClick={() => setShowSettings((currentState) => !currentState)}
        >
          <CgMoreVerticalAlt size={21} />
        </Icon>
        <AuthButton />
        {showSettings && <Settings />}
      </HeaderMoreSection>
    </StyledHeader>
  );
};

export default Header;
