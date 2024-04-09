import React from "react";
import { StyledRegularVideoItem } from "./RegularVideoItem.styles";
import { Video } from "pexels";

interface IRegularVideoItemProps {
  video: Video;
}

const RegularVideoItem = (video: IRegularVideoItemProps) => {
  return <StyledRegularVideoItem>RegularVideoItem</StyledRegularVideoItem>;
};

export default RegularVideoItem;
