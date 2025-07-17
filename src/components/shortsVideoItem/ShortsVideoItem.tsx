import { useEffect, useState } from "react";
import { useAppContext } from "../../context/App.context";
import {
  StyledShortsVideoItem,
  StyledShortsVideoThumbnail,
} from "./ShortsVideoItem.styles";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { getTitle } from "../../utils/videos";
import { Text } from "../../utils/Text.styles";
import { ITranslations } from "../../utils/translations";
import { translateText } from "../../utils/translate";

interface IShortsVideoItemProps {
  video: Video;
}

/**
 * @component ShortsVideoItem.
 * @returns {JSX.Element} - The ShortsVideoItem component.
 */
const ShortsVideoItem = ({ video }: IShortsVideoItemProps) => {
  /**
   * Check if the preview trailer must be played.
   * @type {[boolean, function]}.
   */
  const [playTrailer, setPlayTrailer] = useState(false);
  /**
   * App context.
   * @type {{boolean} {function} {object} {string}}.
   */
  const { isMenuSmall, setVideoToWatch, text, language } = useAppContext();
  /**
   * The maximum length of the video title.
   * @type {number}.
   */
  const TITLE_LENGTH = 50;
  /**
   * The number of views for the video.
   * @type {number}.
   */
  const views = Math.floor(video.duration * 1.2 + 2);
  /**
   * The title of the video.
   * @type {[string, function]}.
   */
  const [title, setTitle] = useState("Video Title");

  useEffect(() => {
    if (video?.url) {
      const fetchTranslation = async () => {
        const translated = await translateText(getTitle(video.url!), language);
        setTitle(translated || getTitle(video.url!));
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
      <Text className="details">
        {views} M {text["views" as keyof ITranslations]}
      </Text>
    </StyledShortsVideoItem>
  );
};

export default ShortsVideoItem;
