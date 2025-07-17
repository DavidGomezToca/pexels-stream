import React from "react";
import {
  StyledHomepageVideos,
  RegularVideoThumbnailsContainer,
} from "./HomepageVideos.styles";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import VideoShorts from "../videoShorts/VideoShorts";

/**
 * @component HomepageVideos.
 * @returns {JSX.Element} - The HomepageVideos component.
 */
const HomepageVideos = () => {
  /**
   * App context.
   * @type {{object}}.
   */
  const { videos } = useAppContext();
  /**
   * The level of videos to display by row.
   * @type {[string, function]}.
   */
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
  /**
   * The amount of normal videos to display.
   * @type {number}.
   */
  const normalVideosCantity =
    videosByRow === "one"
      ? 3
      : videosByRow === "two"
      ? 4
      : videosByRow === "three"
      ? 6
      : 8;
  /**
   * The amount of short videos to display.
   * @type {number}.
   */
  const shortVideosCantity =
    videosByRow === "one"
      ? 4
      : videosByRow === "two"
      ? 8
      : videosByRow === "three"
      ? 12
      : 24;
  /**
   * The videos to display on the first section.
   * @type {object}.
   */
  const FIRST_VIDEO_SECTION = videos.slice(0, normalVideosCantity);
  /**
   * The videos to display on the first section.
   * @type {object}.
   */
  const SECOND_VIDEO_SECTION = videos.slice(
    normalVideosCantity,
    normalVideosCantity + shortVideosCantity
  );
  /**
   * The videos to display on the first section.
   * @type {object}.
   */
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
