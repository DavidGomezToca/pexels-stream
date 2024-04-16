import styled from "styled-components";

export const StyledShortsVideoItem = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
  }

  .videoItemTitle {
    font-size: 16px;
    margin-top: 0.7rem;
    margin-bottom: 0.3rem;
  }

  .details {
    font-size: 14px;
    color: ${({ theme: { grey3 } }) => grey3};
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

export const StyledShortsVideoThumbnail = styled.div<{ $isMenuSmall: boolean }>`
  height: 24.8rem;
  width: 100%;
  border-radius: 0.8rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
`;
