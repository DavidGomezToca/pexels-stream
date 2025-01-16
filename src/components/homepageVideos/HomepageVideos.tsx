import React from "react";
import {
  StyledHomepageVideos,
  RegularVideoThumbnailsContainer,
} from "./HomepageVideos.styles";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import VideoShorts from "../videoShorts/VideoShorts";

const HomepageVideos = () => {
  const { videos } = useAppContext();
  const FIRST_VIDEO_SECTION = videos.slice(0, 8);
  const SECOND_VIDEO_SECTION = videos.slice(8, 20);
  const THIRD_VIDEO_SECTION = videos.slice(20, 28);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videosByRow, setVideosByRow] = React.useState(
    window.innerWidth <= 450
      ? "one"
      : window.innerWidth <= 650
      ? "two"
      : window.innerWidth <= 900
      ? "three"
      : "four"
  );

  return (
    <StyledHomepageVideos>
      <RegularVideoThumbnailsContainer className={videosByRow}>
        {FIRST_VIDEO_SECTION.map((video) => (
          <RegularVideoItem key={video.id} video={video} />
        ))}
      </RegularVideoThumbnailsContainer>
      <VideoShorts videos={SECOND_VIDEO_SECTION} />
      <RegularVideoThumbnailsContainer className={videosByRow}>
        {THIRD_VIDEO_SECTION.map((video) => (
          <RegularVideoItem key={video.id} video={video} />
        ))}
      </RegularVideoThumbnailsContainer>
    </StyledHomepageVideos>
  );
};

export default HomepageVideos;
