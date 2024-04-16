import React, { useState } from "react";
import { useAppContext } from "../../context/App.context";
import {
  StyledShortsVideoItem,
  StyledShortsVideoThumbnail,
} from "./ShortsVideoItem.styles";
import ReactPlayer from "react-player";
import { Video } from "pexels";
import { Text } from "../../utils/Text.styles";
import { getTitle } from "../../utils/videos";

interface IShortsVideoItemProps {
  video: Video;
}

const ShortsVideoItem = ({ video }: IShortsVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall } = useAppContext();
  const TITLE_LENGTH = 50;

  return (
    <StyledShortsVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
    >
      <StyledShortsVideoThumbnail $isMenuSmall={isMenuSmall}>
        {playTrailer ? (
          <ReactPlayer
            width="100%"
            height="100%"
            controls={false}
            volume={1}
            muted={false}
            style={{ height: "100%", width: "100%" }}
            playing={playTrailer}
            url={video.video_files[0].link}
          />
        ) : (
          <img src={video.image} alt="thumbnail" />
        )}
      </StyledShortsVideoThumbnail>
      <Text className="videoItemTitle">
        {getTitle(video.url).slice(0, TITLE_LENGTH)}
        {getTitle(video.url).length > TITLE_LENGTH && "..."}
      </Text>
      <Text className="details">{video.duration}M views</Text>
    </StyledShortsVideoItem>
  );
};

export default ShortsVideoItem;
