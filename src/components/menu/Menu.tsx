import React from "react";
import { MenuItem, StyledMenu } from "./Menu.styles";
import { useAppContext } from "../../context/App.context";
import { MENU_SMALL } from "../../utils/SideMenu";
import { Text } from "../../utils/Text.styles";
import { ITranslations } from "../../utils/translations";

const Menu = () => {
  const { isMenuSmall, text } = useAppContext();
  if (isMenuSmall) {
    return (
      <StyledMenu>
        {MENU_SMALL.map(({ name, icon }) => (
          <MenuItem className="small">
            {icon}
            <Text>{text[name as keyof ITranslations]}</Text>
          </MenuItem>
        ))}
      </StyledMenu>
    );
  }
  return <StyledMenu></StyledMenu>;
};

export default Menu;
