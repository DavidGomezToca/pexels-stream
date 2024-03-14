import React from "react";
import {
  StyledHeader,
  LeftSection,
  SearchSection,
  HeaderMoreSection,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <LeftSection>Left Section</LeftSection>
      <SearchSection>YOU STREAM v0.13.0</SearchSection>
      <HeaderMoreSection>More Section</HeaderMoreSection>
    </StyledHeader>
  );
};

export default Header;
