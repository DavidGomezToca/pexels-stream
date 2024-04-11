import React, { useState } from "react";
import {
  RegularVideoThumbnail,
  StyledRegularVideoItem,
} from "./RegularVideoItem.styles";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { useAppContext } from "../../context/App.context";

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
      </RegularVideoThumbnail>
    </StyledRegularVideoItem>
  );
};

export default RegularVideoItem;
