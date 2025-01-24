import React, { useEffect, useState } from "react";
import {
  RegularVideoContent,
  RegularVideoPic,
  RegularVideoThumbnail,
  RegularVideoTitleSubTitle,
  StyledRegularVideoItem,
  Time,
} from "./RegularVideoItem.styles";
import { Video } from "pexels";
import ReactPlayer from "react-player";
import { getTitle } from "../../utils/videos";
import { Text } from "../../utils/Text.styles";
import { translateText } from "../../utils/translate";
import { ITranslations } from "../../utils/translations";
import { useAppContext } from "../../context/App.context";

interface IRegularVideoItemProps {
  video: Video;
  smallView?: boolean;
}

const RegularVideoItem = ({ video, smallView }: IRegularVideoItemProps) => {
  const [playTrailer, setPlayTrailer] = useState(false);
  const { isMenuSmall, setVideoToWatch, language } = useAppContext();
  const TITLE_LENGTH = 50;
  const views = Math.floor(video.duration * 1.2 + 2);
  const dateUpload = Math.floor(video.duration / 0.8 + 5);
  const { text } = useAppContext();
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
    <StyledRegularVideoItem
      onMouseOver={() => setPlayTrailer(true)}
      onMouseOut={() => setPlayTrailer(false)}
      onClick={() => setVideoToWatch(video.id)}
      className={`${smallView && "smallView"}`}
    >
      <RegularVideoThumbnail
        $isMenuSmall={isMenuSmall}
        className={`${smallView && "smallView"}`}
      >
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
            {String(Math.floor(video.duration / 60)).padStart(2, "0")}:
            {String(Math.floor(video.duration % 60)).padStart(2, "0")}
          </Text>
        </Time>
      </RegularVideoThumbnail>
      <RegularVideoContent className={`${smallView && "smallView"}`}>
        <RegularVideoPic className={`${smallView && "smallView"}`}>
          <img src={video.image} alt="profile pic" />
        </RegularVideoPic>
        <RegularVideoTitleSubTitle className={`${smallView && "smallView"}`}>
          <Text className="videoItemTitle">
            {title.slice(0, TITLE_LENGTH)}
            {title.length > TITLE_LENGTH && "..."}
          </Text>
          <Text className="name">{video.user.name}</Text>
          <Text className="details">
            {views} M {text["views" as keyof ITranslations]}
            <span className="dot">&#9679;</span>
            {dateUpload >= 30
              ? `${Math.floor(dateUpload / 30)} ${
                  Math.floor(dateUpload / 30) === 1
                    ? text["month" as keyof ITranslations]
                    : text["months" as keyof ITranslations]
                }`
              : `${dateUpload} ${
                  dateUpload === 1
                    ? text["day" as keyof ITranslations]
                    : text["days" as keyof ITranslations]
                }`}
          </Text>
        </RegularVideoTitleSubTitle>
      </RegularVideoContent>
    </StyledRegularVideoItem>
  );
};

export default RegularVideoItem;
