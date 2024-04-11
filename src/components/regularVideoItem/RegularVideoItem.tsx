import React, { useState } from "react";
import {
  RegularVideoThumbnail,
  StyledRegularVideoItem,
  Time,
} from "./RegularVideoItem.styles";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";

interface IRegularVideoItemProps {
  video: Video;
}

const RegularVideoItem = ({ video }: IRegularVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall } = useAppContext();

  return (
    <StyledRegularVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
    >
      <RegularVideoThumbnail $isMenuSmall={isMenuSmall}>
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
        <Time>
          <Text>
            {Math.floor(video.duration / 60)}:{Math.floor(video.duration % 60)}
          </Text>
        </Time>
      </RegularVideoThumbnail>
    </StyledRegularVideoItem>
  );
};

export default RegularVideoItem;
