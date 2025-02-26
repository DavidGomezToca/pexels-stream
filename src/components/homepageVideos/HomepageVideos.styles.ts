import styled from "styled-components";

export const StyledHomepageVideos = styled.div`
  overflow-y: scroll;
  height: 100vh;
  padding: 1.6rem 1.5rem 5rem 1.5rem;
`;

export const RegularVideoThumbnailsContainer = styled.div`
  display: grid;
  column-gap: 1rem;
  row-gap: 3rem;

  &.four {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  &.three {
    grid-template-columns: 1fr 1fr 1fr;
  }
  &.two {
    grid-template-columns: 1fr 1fr;
  }
  &.one {
    grid-template-columns: 1fr;
  }
`;
