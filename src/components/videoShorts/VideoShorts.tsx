import React, { useState } from "react";
import { Video } from "pexels";
import {
  MoreLessButton,
  MoreLessContainer,
  ShortsVideosContainer,
  StyledVideoShorts,
  VideoShortsHeading,
} from "./VideoShorts.styles";
import { SiYoutubeshorts } from "react-icons/si";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ShortsVideoItem from "../shortsVideoItem/ShortsVideoItem";

interface IVideoShortsProps {
  videos: Video[];
}

/**
 * @component VideoShorts.
 * @returns {JSX.Element} - The VideoShorts component.
 */
const VideoShorts = ({ videos }: IVideoShortsProps) => {
  /**
   * Check if show more is active.
   * @type {[boolean, function]}.
   */
  const [showMore, setShowMore] = useState(false);
  /**
   * The list of videos to display.
   * @type {{object}}.
   */
  const videosList = showMore ? videos : videos.slice(0, videos.length / 2);
  /**
   * App context.
   * @type {{object}}.
   */
  const { text } = useAppContext();
  /**
   * The amount of videos to display by row.
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
      : window.innerWidth <= 1200
      ? "four"
      : window.innerWidth <= 1500
      ? "five"
      : "six"
  );

  return (
    <StyledVideoShorts>
      <VideoShortsHeading>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortsHeading>
      <ShortsVideosContainer className={videosByRow}>
        {videosList.map((video) => (
          <ShortsVideoItem key={video.id} video={video} />
        ))}
      </ShortsVideosContainer>
      <MoreLessContainer>
        <MoreLessButton onClick={() => setShowMore((state) => !state)}>
          <Text>{showMore ? text.showLess : text.showMore}</Text>
          {showMore ? (
            <IoIosArrowUp className="icon" size={20} />
          ) : (
            <IoIosArrowDown className="icon" size={20} />
          )}
        </MoreLessButton>
      </MoreLessContainer>
    </StyledVideoShorts>
  );
};

export default VideoShorts;
