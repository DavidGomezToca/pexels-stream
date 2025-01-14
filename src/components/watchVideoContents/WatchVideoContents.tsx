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
} from "./WatchVideoContents.styles";
import Categories from "../categories/Categories";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";
import { useParams } from "react-router-dom";
import { getTitle } from "../../utils/videos";
import { LoadingBackdrop } from "../content/Content.styles";
import ReactPlayer from "react-player";
import { Text } from "../../utils/Text.styles";
import { faker } from "@faker-js/faker";
import { RegularVideoPic } from "../regularVideoItem/RegularVideoItem.styles";
import { HiDotsHorizontal } from "react-icons/hi";
import { PiListPlusFill } from "react-icons/pi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { TiThumbsDown, TiThumbsUp } from "react-icons/ti";

const WatchVideoContents = () => {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos, text } =
    useAppContext();
  const { id } = useParams();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

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

  document.title = getTitle(videoToWatchData?.url!);

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isFetchingVideos) {
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
            <Text className="videoScreenTitle">
              {getTitle(videoToWatchData?.url + "")}
            </Text>
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
                <SubscribeButton>{text.subscribe}</SubscribeButton>
              </VideoDetailsInfo>
              <DetailsActions>
                <DetailsActionButton>
                  <>
                    <TiThumbsUp
                      size={21}
                      color={`${like ? "blue" : ""}`}
                      onClick={handleLike}
                    />
                    <Text>
                      {(videoToWatchData?.duration ?? 0) * 2 + (like ? 1 : 0)}
                    </Text>
                  </>
                  <span className="divider">&nbsp;</span>
                  <TiThumbsDown
                    size={21}
                    color={`${dislike ? "red" : ""}`}
                    onClick={handleDislike}
                  />
                </DetailsActionButton>
                <DetailsActionButton>
                  <IoArrowRedoOutline size={21} />
                  <Text>{text.share}</Text>
                </DetailsActionButton>
                <DetailsActionButton>
                  <PiListPlusFill size={21} />
                  <Text>{text.save}</Text>
                </DetailsActionButton>
                <DetailsActionButton>
                  <HiDotsHorizontal size={21} />
                </DetailsActionButton>
              </DetailsActions>
            </VideoDetailsActions>
            <VideoDescription>
              <Text>{faker.lorem.paragraphs(5)}</Text>
            </VideoDescription>
          </VideoDetails>
        </WatchVideosContainer>
        <MoreVideosContainer>
          <Categories />
          {videos.map((video) => (
            <RegularVideoItem key={video.id} smallView={true} video={video} />
          ))}
        </MoreVideosContainer>
      </StyledWatchVideoContents>
    </div>
  );
};

export default WatchVideoContents;
