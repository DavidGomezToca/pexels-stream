import React from "react";
import {
  CategoriesCarousel,
  StyledCategories,
  CategoryItem,
} from "./Categories.styles";
import { CATEGORIES } from "../../utils/categories";
import { Text } from "../../utils/Text.styles";
import { useAppContext } from "../../context/App.context";
import { ITranslations } from "../../utils/translations";

const Categories = () => {
  const { text, activeCategory, setActiveCategory } = useAppContext();
  return (
    <CategoriesCarousel>
      <StyledCategories>
        {CATEGORIES.map((name, index) => (
          <CategoryItem
            key={index}
            active={name.toLowerCase() === activeCategory.toLowerCase()}
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
