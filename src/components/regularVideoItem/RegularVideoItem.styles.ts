import styled, { css } from "styled-components";

export const StyledRegularVideoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  background-color: red;
  height: 10rem;

  &:hover {
    cursor: pointer;
  }
`;

export const RegularVideoThumbnail = styled.div<{ $isMenuSmall?: boolean }>`
  width: 100%;
  height: 12.2rem;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }

  ${({ $isMenuSmall }) =>
    $isMenuSmall &&
    css`
      height: 13.7rem;
    `}
`;
