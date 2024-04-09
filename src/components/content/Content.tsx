import React from "react";
import { LoadingBackdrop, StyledContent } from "./Content.styles";
import Categories from "../categories/Categories";
import { useAppContext } from "../../context/App.context";

const Content = () => {
  const { isFetchingVideos } = useAppContext();
  return (
    <StyledContent>
      <Categories />
      {isFetchingVideos && <LoadingBackdrop />}
    </StyledContent>
  );
};

export default Content;
