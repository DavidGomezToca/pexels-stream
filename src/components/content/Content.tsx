import { LoadingBackdrop, StyledContent } from "./Content.styles";
import { useAppContext } from "../../context/App.context";
import HomepageVideos from "../homepageVideos/HomepageVideos";

const Content = () => {
  const { isFetchingVideos } = useAppContext();
  return (
    <StyledContent>
      <HomepageVideos />
      {isFetchingVideos && <LoadingBackdrop />}
    </StyledContent>
  );
};

export default Content;
