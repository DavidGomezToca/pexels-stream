import { LargeMenuSection, MenuItem, StyledMenu } from "./Menu.styles";
import { useAppContext } from "../../context/App.context";
import { Text } from "../../utils/Text.styles";
import { CATEGORIES } from "../../utils/categories";
import { ITranslations } from "../../utils/translations";

const Menu = () => {
  const {
    isMenuSmall,
    text,
    // activeMenuText,
    activeCategory,
    setActiveCategory,
  } = useAppContext();
  if (!isMenuSmall) {
    return (
      <StyledMenu>
        {CATEGORIES.map((name, index) => (
          <div key={name}>
            <LargeMenuSection>
              <MenuItem
                $active={
                  name.toLowerCase() === activeCategory.toLowerCase()
                    ? "true"
                    : "false"
                }
                className="large"
                key={name}
                onClick={() => setActiveCategory(name)}
              >
                <Text className="text_category">
                  {text[name as keyof ITranslations]}
                </Text>
              </MenuItem>
            </LargeMenuSection>
          </div>
        ))}
      </StyledMenu>
    );
  } else {
    return <></>;
  }
};

export default Menu;
