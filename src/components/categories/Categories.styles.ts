import styled from "styled-components";

export const StyledCategories = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  position: relative;
  padding-right: 10rem;
  z-index: 100;
`;

export const CategoryItem = styled.div<{ active: boolean }>`
  background-color: ${({ theme: { divider, text }, active }) =>
    active ? text : divider};
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  white-space: nowrap;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme: { background, text }, active }) =>
      active ? background : text} !important};
  }

  &:hover{
    cursor: pointer;
  }
`;

export const CategoriesCarousel = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin-bottom: -18px;
`;
