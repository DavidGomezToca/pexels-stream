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

const VideoShorts = ({ videos }: IVideoShortsProps) => {
  const [showLess, setShowLess] = useState(true);
  const videosList = showLess ? videos.slice(0, videos.length / 2) : videos;
  const { text } = useAppContext();
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
        <MoreLessButton onClick={() => setShowLess((state) => !state)}>
          <Text>{showLess ? text.showMore : text.showLess}</Text>
          {showLess ? (
            <IoIosArrowDown className="icon" size={20} />
          ) : (
            <IoIosArrowUp className="icon" size={20} />
          )}
        </MoreLessButton>
      </MoreLessContainer>
    </StyledVideoShorts>
  );
};

export default VideoShorts;
