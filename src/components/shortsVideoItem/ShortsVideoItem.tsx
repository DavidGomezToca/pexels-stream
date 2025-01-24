import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/App.context";
import {
  StyledShortsVideoItem,
  StyledShortsVideoThumbnail,
} from "./ShortsVideoItem.styles";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { getTitle } from "../../utils/videos";
import { Text } from "../../utils/Text.styles";
import { translateText } from "../../utils/translate";

interface IShortsVideoItemProps {
  video: Video;
}

const ShortsVideoItem = ({ video }: IShortsVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall, setVideoToWatch, language } = useAppContext();
  const TITLE_LENGTH = 50;
  const [title, setTitle] = useState("Video Title");

  useEffect(() => {
    if (video?.url) {
      const fetchTranslation = async () => {
        const translated = await translateText(getTitle(video.url!), language);
        setTitle(translated || getTitle(video.url!)); // Fallback to original title if translation fails
      };

      fetchTranslation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [video?.url, language]);

  return (
    <StyledShortsVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
      onClick={() => setVideoToWatch(video.id)}
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
        {title.slice(0, TITLE_LENGTH)}
        {title.length > TITLE_LENGTH && "..."}
      </Text>
      <Text className="details">{video.duration}M views</Text>
    </StyledShortsVideoItem>
  );
};

export default ShortsVideoItem;
