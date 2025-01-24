import React, { useEffect, useState } from "react";
import {
  DetailsActionButton,
  DetailsActions,
  MoreVideosContainer,
  StyledWatchVideoContents,
  SubscribeButton,
  UserAccount,
  VideoDescription,
  VideoDetails,
  VideoDetailsActions,
  VideoDetailsInfo,
  VideoScreen,
  WatchVideosContainer,
  ShareButton,
} from "./WatchVideoContents.styles";
import ReactPlayer from "react-player";
import { faker } from "@faker-js/faker";
import { useParams } from "react-router-dom";
import { getTitle } from "../../utils/videos";
import { Text } from "../../utils/Text.styles";
import { EmailShareButton } from "react-share";
import { PiListPlusFill } from "react-icons/pi";
import Categories from "../categories/Categories";
import { IoArrowRedoOutline } from "react-icons/io5";
import { translateText } from "../../utils/translate";
import { useAppContext } from "../../context/App.context";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";
import { LoadingBackdrop } from "../content/Content.styles";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import { RegularVideoPic } from "../regularVideoItem/RegularVideoItem.styles";
// import { HiDotsHorizontal } from "react-icons/hi";

const WatchVideoContents = () => {
  const {
    videos,
    fetchVideo,
    videoToWatchData,
    isFetchingVideos,
    text,
    language,
  } = useAppContext();
  const { id } = useParams();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [title, setTitle] = useState("Video Title");

  const handleLike = () => {
    setLike((prevLike) => !prevLike);
    if (!like) {
      setDislike(false);
    }
  };

  const handleDislike = () => {
    setDislike((prevDislike) => !prevDislike);
    if (!dislike) {
      setLike(false);
    }
  };

  const handleSubscribed = () => {
    setSubscribed((prevSubscribed) => !prevSubscribed);
  };

  const handleSaved = () => {
    setSaved((prevSaved) => !prevSaved);
  };

  // const translateText = async (
  //   text: string,
  //   targetLang: string
  // ): Promise<void> => {
  //   if (language === "en") {
  //     setTranslatedTitle(getTitle(videoToWatchData?.url!));
  //     return;
  //   }
  //   try {
  //     const response = await fetch(
  //       `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
  //         text
  //       )}&langpair=en|${targetLang}`
  //     );
  //     const data = await response.json();
  //     if (data?.responseData?.translatedText) {
  //       setTranslatedTitle(data.responseData.translatedText);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching translation:", error);
  //   }
  // };

  document.title = getTitle(videoToWatchData?.url!);

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
    setLike(false);
    setDislike(false);
    setSubscribed(false);
    setSaved(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language]);

  useEffect(() => {
    if (videoToWatchData?.url) {
      const fetchTranslation = async () => {
        const translated = await translateText(
          getTitle(videoToWatchData.url!),
          language
        );
        setTitle(translated || getTitle(videoToWatchData.url!)); // Fallback to original title if translation fails
      };

      fetchTranslation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoToWatchData?.url, language]);

  if (isFetchingVideos || !videoToWatchData) {
    return <LoadingBackdrop />;
  }

  return (
    <div>
      <StyledWatchVideoContents>
        <WatchVideosContainer>
          <VideoScreen>
            <ReactPlayer
              width="100%"
              height="100%"
              controls={true}
              volume={1}
              muted={false}
              style={{ height: "100%", width: "100%" }}
              playing={true}
              url={videoToWatchData?.video_files[0].link}
            />
          </VideoScreen>
          <VideoDetails>
            <Text className="videoScreenTitle">{title}</Text>
            <VideoDetailsActions>
              <VideoDetailsInfo>
                <RegularVideoPic>
                  <img src={videoToWatchData?.image} alt="profile pic" />
                </RegularVideoPic>
                <UserAccount>
                  <Text className="name">{videoToWatchData?.user.name}</Text>
                  <Text className="subscribers">
                    {videoToWatchData?.duration}k {text.subscribers}
                  </Text>
                </UserAccount>
                <SubscribeButton
                  className={subscribed ? "subscribed" : ""}
                  onClick={handleSubscribed}
                >
                  {subscribed ? text.subscribed : text.subscribe}
                </SubscribeButton>
              </VideoDetailsInfo>
              <DetailsActions>
                <DetailsActionButton>
                  <>
                    <TiThumbsUp
                      size={21}
                      color={like ? "blue" : ""}
                      onClick={handleLike}
                    />
                    <Text>
                      {(videoToWatchData?.duration ?? 0) * 2 + (like ? 1 : 0)}
                    </Text>
                  </>
                  <span className="divider">&nbsp;</span>
                  <TiThumbsDown
                    size={21}
                    color={dislike ? "red" : ""}
                    onClick={handleDislike}
                  />
                </DetailsActionButton>
                <DetailsActionButton>
                  <EmailShareButton url={window.location.href}>
                    <ShareButton>
                      <IoArrowRedoOutline size={21} />
                      <Text>{text.share}</Text>
                    </ShareButton>
                  </EmailShareButton>
                </DetailsActionButton>
                <DetailsActionButton
                  className={saved ? "saved" : ""}
                  onClick={handleSaved}
                >
                  <PiListPlusFill size={21} />
                  <Text>{saved ? text.saved : text.save}</Text>
                </DetailsActionButton>
                {/* <DetailsActionButton>
                  <HiDotsHorizontal size={21} />
                </DetailsActionButton> */}
              </DetailsActions>
            </VideoDetailsActions>
            <VideoDescription>
              <Text>{faker.lorem.paragraphs(5)}</Text>
            </VideoDescription>
          </VideoDetails>
        </WatchVideosContainer>
        <MoreVideosContainer>
          <Categories />
          {videos
            .filter((video) => video.id !== videoToWatchData?.id)
            .map((video) => (
              <RegularVideoItem key={video.id} smallView={true} video={video} />
            ))}
        </MoreVideosContainer>
      </StyledWatchVideoContents>
    </div>
  );
};

export default WatchVideoContents;
