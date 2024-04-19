import React, { useEffect } from "react";
import {
  MoreVideosContainer,
  StyledWatchVideoContents,
  VideoDescription,
  VideoDetails,
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

const WatchVideoContents = () => {
  const { videos, fetchVideo, videoToWatchData, isFetchingVideos } =
    useAppContext();
  const { id } = useParams();

  document.title = getTitle(videoToWatchData?.url!);

  useEffect(() => {
    if (id) {
      fetchVideo(id);
    }
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
            <VideoDescription>
              <Text>{faker.lorem.paragraphs(5)}</Text>
            </VideoDescription>
          </VideoDetails>
        </WatchVideosContainer>
        <MoreVideosContainer>
          <Categories />
          {videos.map((video, index) => (
            <RegularVideoItem key={index} smallView={true} video={video} />
          ))}
        </MoreVideosContainer>
      </StyledWatchVideoContents>
    </div>
  );
};

export default WatchVideoContents;
