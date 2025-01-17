import { styled } from "styled-components";

export const StyledBody = styled.div<{ $isMenuSmall: boolean }>`
  width: 100%;
  height: 94.2vh;
  display: grid;
  grid-template-columns: ${({ $isMenuSmall }) =>
    $isMenuSmall ? "1fr" : "10rem 1fr"};
  gap: ${({ $isMenuSmall }) => ($isMenuSmall ? "1.5rem" : "2rem")};
`;
