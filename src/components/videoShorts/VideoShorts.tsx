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

interface IVideoShortsProps {
  videos: Video[];
}

const VideoShorts = ({ videos }: IVideoShortsProps) => {
  const [showLess, setShowLess] = useState(true);
  const videosList = showLess ? videos.slice(0, videos.length / 2) : videos;
  const { text } = useAppContext();

  return (
    <StyledVideoShorts>
      <VideoShortsHeading>
        <SiYoutubeshorts size={25} color="red" />
        <Text>{text.shorts}</Text>
      </VideoShortsHeading>
      <ShortsVideosContainer>
        {videosList.map((video, index) => (
          <p>Video {index}</p>
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
