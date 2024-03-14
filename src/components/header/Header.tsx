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

const Header = () => {
  return (
    <StyledHeader>
      <LeftSection>
        <Icon className="menu">
          <SlMenu size={17} />
        </Icon>
        <LogoSection to="/">
          <FaYoutube color="#FF0000" size={30} />
          <Text className="logo">YouStream v0.14.0</Text>
        </LogoSection>
      </LeftSection>
      <SearchSection>Search Section</SearchSection>
      <HeaderMoreSection>More Section</HeaderMoreSection>
    </StyledHeader>
  );
};

export default Header;
