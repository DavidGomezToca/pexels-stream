import React from "react";
import { LargeMenuSection, MenuItem, StyledMenu } from "./Menu.styles";
import { useAppContext } from "../../context/App.context";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MENU_LARGE, MENU_SMALL } from "../../utils/SideMenu";
import { Text } from "../../utils/Text.styles";
import { CATEGORIES } from "../../utils/categories";
import { ITranslations } from "../../utils/translations";

const Menu = () => {
  const {
    isMenuSmall,
    text,
    activeMenuText,
    activeCategory,
    setActiveCategory,
  } = useAppContext();
  if (isMenuSmall) {
    return (
      <StyledMenu>
        {MENU_SMALL.map(({ name, icon }) => (
          <MenuItem
            active={
              activeMenuText.toLowerCase() ===
              text[name as keyof ITranslations].toLowerCase()
                ? "true"
                : "false"
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
        {CATEGORIES.map((name, index) => (
          <div key={name}>
            <LargeMenuSection>
              <MenuItem
                active={
                  name.toLowerCase() === activeCategory.toLowerCase()
                    ? "true"
                    : "false"
                }
                className="large"
                key={name}
                onClick={() => setActiveCategory(name)}
              >
                <Text className="category">
                  {text[name as keyof ITranslations]}
                </Text>
              </MenuItem>
            </LargeMenuSection>
          </div>
          // <div key={title}>
          //   <LargeMenuSection>
          //     {title && (
          //       <Text className="title">
          //         {text[title as keyof ITranslations]}
          //       </Text>
          //     )}
          //     <>
          //       {list.map(({ name, icon }) => (
          //         <MenuItem
          //           active={
          //             activeMenuText.toLowerCase() ===
          //             text[name as keyof ITranslations].toLowerCase()
          //               ? "true"
          //               : "false"
          //           }
          //           className="large"
          //           key={name}
          //         >
          //           {icon}
          //           <Text>{text[name as keyof ITranslations]}</Text>
          //         </MenuItem>
          //       ))}
          //     </>
          //   </LargeMenuSection>
          //   {index === 1 && (
          //     <LargeMenuSection className="text">
          //       <Text>{text.signInMenuText}</Text>
          //       <AuthButton />
          //     </LargeMenuSection>
          //   )}
          // </div>
        ))}
      </StyledMenu>
    );
  }
};

export default Menu;
