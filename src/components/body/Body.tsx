import React from "react";
import { StyledBody } from "./Body.styles";
import { useAppContext } from "../../context/App.context";
import Menu from "../menu/Menu";

const Body = () => {
  const { isMenuSmall } = useAppContext();
  return (
    <StyledBody $isMenuSmall={isMenuSmall}>
      <Menu />
      <p>Content</p>
    </StyledBody>
  );
};

export default Body;
