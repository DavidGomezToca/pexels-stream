import { LoadingBackdrop, StyledContent } from "./Content.styles";
import { useAppContext } from "../../context/App.context";
import HomepageVideos from "../homepageVideos/HomepageVideos";

/**
 * @component Content.
 * @returns {JSX.Element} - The Content component.
 */
const Content = () => {
  /**
   * App Context.
   * @type {boolean}.
   */
  const { isFetchingVideos } = useAppContext();

  return (
    <StyledContent>
      <HomepageVideos />
      {isFetchingVideos && <LoadingBackdrop />}
    </StyledContent>
  );
};

export default Content;
