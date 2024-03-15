import React from "react";
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

const Header = () => {
  return (
    <StyledHeader>
      <LeftSection>
        <Icon className="menu">
          <SlMenu size={17} />
        </Icon>
        <LogoSection to="/">
          <FaYoutube color="#FF0000" size={30} />
          <Text className="logo">YouStream v0.15.0</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>Search Section</SearchSection>
      <HeaderMoreSection>
        <Tooltip id="my-tooltip-settings" />
        <Icon
          data-tooltip-id="my-tooltip-settings"
          data-tooltip-content="Settings"
        >
          <CgMoreVerticalAlt size={21} />
        </Icon>
        <AuthButton />
      </HeaderMoreSection>
    </StyledHeader>
  );
};

export default Header;
