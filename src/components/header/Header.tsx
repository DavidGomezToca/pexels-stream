import React, { useState } from "react";
import {
  StyledHeader,
  LeftSection,
  SearchSection,
  HeaderMoreSection,
  LogoSection,
} from "./Header.styles";
import { Text } from "../../utils/Text.styles";
import { Icon } from "../../utils/Icon.styles";
import { SlMenu } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import AuthButton from "../authButton/AuthButton";
import { CgMoreVerticalAlt } from "react-icons/cg";
import { Tooltip } from "react-tooltip";
import Settings from "../Settings/Settings";

const Header = () => {
  const [showSettings, setShowSettings] = useState(false);
  return (
    <StyledHeader>
      <LeftSection>
        <Icon className="menu">
          <SlMenu size={17} />
        </Icon>
        <LogoSection to="/">
          <FaYoutube color="#FF0000" size={30} />
          <Text className="logo">YouStream v0.17.0</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>Search Section</SearchSection>
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
