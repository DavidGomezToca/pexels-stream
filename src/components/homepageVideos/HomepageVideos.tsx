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
  const normalVideosCantity =
    videosByRow === "one"
      ? 3
      : videosByRow === "two"
      ? 4
      : videosByRow === "three"
      ? 6
      : 8;
  const shortVideosCantity =
    videosByRow === "one"
      ? 4
      : videosByRow === "two"
      ? 8
      : videosByRow === "three"
      ? 12
      : 24;
  const FIRST_VIDEO_SECTION = videos.slice(0, normalVideosCantity);
  const SECOND_VIDEO_SECTION = videos.slice(
    normalVideosCantity,
    normalVideosCantity + shortVideosCantity
  );
  const THIRD_VIDEO_SECTION = videos.slice(
    normalVideosCantity + shortVideosCantity,
    normalVideosCantity + shortVideosCantity + normalVideosCantity
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
