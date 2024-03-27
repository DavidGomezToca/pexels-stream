import { styled } from "styled-components";

export const StyledBody = styled.div<{ $isMenuSmall: boolean }>`
  width: 100%;
  height: 94.2vh;
  display: grid;
  grid-template-columns: ${({ $isMenuSmall }) =>
    $isMenuSmall ? "4.3rem 1fr" : "13.5rem 1fr"};
  gap: ${({ $isMenuSmall }) => ($isMenuSmall ? "1.5rem" : "3rem")};
`;
