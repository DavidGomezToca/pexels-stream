import { Tooltip } from "react-tooltip";

const ToolTips = () => {
  const TOOLTIPS = ["settings", "search", "voiceSearch"];
  return (
    <div>
      {TOOLTIPS.map((id, index) => (
        <Tooltip id={id} key={index} style={{ zIndex: "1000" }} noArrow />
      ))}
    </div>
  );
};

export default ToolTips;
