import React from "react";
import { LoadingBackdrop, StyledContent } from "./Content.styles";
// import Categories from "../categories/Categories";
import { useAppContext } from "../../context/App.context";
import HomepageVideos from "../homepageVideos/HomepageVideos";

const Content = () => {
  const { isFetchingVideos } = useAppContext();
  return (
    <StyledContent>
      {/* <Categories /> */}
      <HomepageVideos />
      {isFetchingVideos && <LoadingBackdrop />}
    </StyledContent>
  );
};

export default Content;
