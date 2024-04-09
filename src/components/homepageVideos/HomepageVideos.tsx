import React from "react";
import {
  StyledHomepageVideos,
  RegularVideoThumbnailsContainer,
} from "./HomepageVideos.styles";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";

const HomepageVideos = () => {
  const { videos } = useAppContext();
  const FIRST_VIDEO_SECTION = videos.splice(0, 8);
  const SECOND_VIDEO_SECTION = videos.splice(8, 20);
  const THIRD_VIDEO_SECTION = videos.splice(20, 28);
  return (
    <StyledHomepageVideos>
      <RegularVideoThumbnailsContainer>
        {FIRST_VIDEO_SECTION.map((video, index) => (
          <RegularVideoItem video={video} />
        ))}
      </RegularVideoThumbnailsContainer>
    </StyledHomepageVideos>
  );
};

export default HomepageVideos;
