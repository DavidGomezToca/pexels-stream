import styled, { css } from "styled-components";

export const StyledRegularVideoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

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

export const Time = styled.div`
  background-color: ${({ theme: { background } }) => background};
  width: max-content;
  padding: 0.15rem 0.25rem;
  border-radius: 0.3rem;
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;

  p {
    font-size: 13px;
  }
`;

export const RegularVideoContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2.3rem 1fr;
  gap: 0.7rem;
`;

export const RegularVideoTitleSubTitle = styled.div`
  margin-top: 0.2rem;
  margin-left: 0.4rem;

  .videoItemTitle {
    font-size: 16px;
    font-weight: 600;
  }

  .name {
    font-size: 14px;
    margin: 0.5rem 0 0.2rem 0;
    color: ${({ theme: { grey3 } }) => grey3};
  }

  .details {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: ${({ theme: { grey3 } }) => grey3};
  }

  .dot {
    font-size: 8px;
  }
`;

export const RegularVideoPic = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
`;
