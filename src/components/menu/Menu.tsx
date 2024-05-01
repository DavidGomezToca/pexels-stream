import React from "react";
import { LargeMenuSection, MenuItem, StyledMenu } from "./Menu.styles";
import { useAppContext } from "../../context/App.context";
import { MENU_LARGE, MENU_SMALL } from "../../utils/SideMenu";
import { Text } from "../../utils/Text.styles";
import { ITranslations } from "../../utils/translations";
import AuthButton from "../authButton/AuthButton";

const Menu = () => {
  const { isMenuSmall, text, activeMenuText } = useAppContext();
  if (isMenuSmall) {
    return (
      <StyledMenu>
        {MENU_SMALL.map(({ name, icon }) => (
          <MenuItem
            active={
              activeMenuText.toLowerCase() ===
              text[name as keyof ITranslations].toLowerCase()
            }
            className="small"
            key={name}
          >
            {icon}
            <Text>{text[name as keyof ITranslations]}</Text>
          </MenuItem>
        ))}
      </StyledMenu>
    );
  } else {
    return (
      <StyledMenu>
        {MENU_LARGE.map(({ title, list }, index) => (
          <>
            <LargeMenuSection key={index}>
              {title && (
                <Text className="title">
                  {text[title as keyof ITranslations]}
                </Text>
              )}
              <>
                {list.map(({ name, icon }) => (
                  <MenuItem
                    active={
                      activeMenuText.toLowerCase() ===
                      text[name as keyof ITranslations].toLowerCase()
                    }
                    className="large"
                    key={name}
                  >
                    {icon}
                    <Text>{text[name as keyof ITranslations]}</Text>
                  </MenuItem>
                ))}
              </>
            </LargeMenuSection>
            {index === 1 && (
              <LargeMenuSection key={index} className="text">
                <Text>{text.signInMenuText}</Text>
                <AuthButton />
              </LargeMenuSection>
            )}
          </>
        ))}
      </StyledMenu>
    );
  }
};

export default Menu;
