import { StyledBody } from "./Body.styles";
import { useAppContext } from "../../context/App.context";
import Menu from "../menu/Menu";
import Content from "../content/Content";

/**
 * @component Body.
 * @returns {JSX.Element} - The Body component.
 */
const Body = () => {
  /**
   * App Context.
   * @type {boolean}.
   */
  const { isMenuSmall } = useAppContext();

  return (
    <StyledBody $isMenuSmall={isMenuSmall}>
      <Menu />
      <Content />
    </StyledBody>
  );
};

export default Body;
