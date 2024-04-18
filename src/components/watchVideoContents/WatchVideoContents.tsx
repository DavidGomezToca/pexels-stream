import React from "react";
import {
  MoreVideosContainer,
  StyledWatchVideoContents,
} from "./WatchVideoContents.styles";
import Categories from "../categories/Categories";
import { useAppContext } from "../../context/App.context";
import RegularVideoItem from "../regularVideoItem/RegularVideoItem";

const WatchVideoContents = () => {
  const { videos } = useAppContext();

  return (
    <div>
      <StyledWatchVideoContents>
        <p>Left Side</p>
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
