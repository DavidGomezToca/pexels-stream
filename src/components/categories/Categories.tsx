import {
  CategoriesCarousel,
  StyledCategories,
  CategoryItem,
} from "./Categories.styles";
import { CATEGORIES } from "../../utils/categories";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";
import { ITranslations } from "../../utils/translations";

/**
 * @component Categories.
 * @returns {JSX.Element} - The Categories component.
 */
const Categories = () => {
  /**
   * App Context.
   * @type {{object} {string} {function}}.
   */
  const { text, activeCategory, setActiveCategory } = useAppContext();

  return (
    <CategoriesCarousel>
      <StyledCategories>
        {CATEGORIES.map((name, index) => (
          <CategoryItem
            key={index}
            $active={
              name.toLowerCase() === activeCategory.toLowerCase()
                ? "true"
                : "false"
            }
            onClick={() => setActiveCategory(name)}
          >
            <Text>{text[name as keyof ITranslations]}</Text>
          </CategoryItem>
        ))}
      </StyledCategories>
    </CategoriesCarousel>
  );
};

export default Categories;
