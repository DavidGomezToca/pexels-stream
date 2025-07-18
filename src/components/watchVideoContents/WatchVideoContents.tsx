import { useEffect, useState } from "react";
import {
  DetailsActionButton,
  DetailsActions,
  MoreVideosContainer,
  StyledWatchVideoContents,
  SubscribeButton,
  Account,
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

/**
 * @component WatchVideoContents.
 * @returns {JSX.Element} - The WatchVideoContents component.
 */
const WatchVideoContents = () => {
  /**
   * App context.
   * @type {{object} {function} {object} {boolean} {object} {string}}.
   */
  const {
    videos,
    fetchVideo,
    videoToWatchData,
    isFetchingVideos,
    text,
    language,
  } = useAppContext();
  /**
   * The ID of the video to watch.
   * @type {string}.
   */
  const { id } = useParams();
  /**
   * Check if the user liked the video.
   * @type {[string, function]}.
   */
  const [like, setLike] = useState(false);
  /**
   * Check if the user disliked the video.
   * @type {[string, function]}.
   */
  const [dislike, setDislike] = useState(false);
  /**
   * Check if the user subscribed to the channel.
   * @type {[string, function]}.
   */
  const [subscribed, setSubscribed] = useState(false);
  /**
   * Check if the user saved the video.
   * @type {[string, function]}.
   */
  const [saved, setSaved] = useState(false);
  /**
   * The title of the video.
   * @type {[string, function]}.
   */
  const [title, setTitle] = useState("Video Title");
  /**
   * Check if show more is active.
   * @type {[boolean, function]}.
   */
  const [showMore, setShowMore] = useState(false);

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
  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

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
        setTitle(translated || getTitle(videoToWatchData.url!));
      };

      fetchTranslation();
    }
  }, [videoToWatchData?.url, language]);

  if (isFetchingVideos || !videoToWatchData) {
    return <LoadingBackdrop />;
  }

  return (
    <div>
      <StyledWatchVideoContents
        className={window.innerWidth <= 1100 ? "small" : ""}
      >
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
            <VideoDetailsActions
              className={window.innerWidth <= 600 ? "small" : ""}
            >
              <VideoDetailsInfo
                className={window.innerWidth <= 400 ? "small" : ""}
              >
                <Account>
                  <RegularVideoPic>
                    <img src={videoToWatchData?.image} alt="profile pic" />
                  </RegularVideoPic>
                  <UserAccount>
                    <Text className="name">{videoToWatchData?.user.name}</Text>
                    <Text className="subscribers">
                      {videoToWatchData?.duration}k {text.subscribers}
                    </Text>
                  </UserAccount>
                </Account>
                <SubscribeButton
                  className={`${subscribed ? "subscribed" : ""} ${
                    window.innerWidth <= 400 ? "small" : ""
                  }`}
                  onClick={handleSubscribed}
                >
                  {subscribed ? text.subscribed : text.subscribe}
                </SubscribeButton>
              </VideoDetailsInfo>
              <DetailsActions
                className={window.innerWidth <= 600 ? "small" : ""}
              >
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
              </DetailsActions>
            </VideoDetailsActions>
            <VideoDescription>
              {showMore ? (
                <Text>
                  {faker.lorem.paragraphs(window.innerWidth <= 600 ? 2 : 4)}
                </Text>
              ) : (
                <Text>
                  {faker.lorem.paragraphs(window.innerWidth <= 600 ? 1 : 2)}...
                </Text>
              )}
              <Text className="showMore" onClick={() => toggleShowMore()}>
                Show {showMore ? "Less" : "More"}
              </Text>
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
