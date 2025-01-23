import styled from "styled-components";

export const StyledWatchVideoContents = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  gap: 1.5vw;
  grid-template-columns: 71.5vw 24vw;
  padding: 0 1.5rem;
  overflow: scroll;
`;

export const MoreVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1.5rem;
`;

export const WatchVideosContainer = styled.div`
  width: 100%;
  padding-top: 1.5rem;
`;

export const VideoScreen = styled.div`
  width: 100%;
  height: 44rem;
  border-radius: 1rem;
  overflow: hidden;
`;

export const VideoDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .videoScreenTitle {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const VideoDescription = styled.div`
  width: 100%;
  background-color: ${({ theme: { grey2 } }) => grey2};
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 1rem;
  line-height: 1.5rem;
`;

export const VideoDetailsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const VideoDetailsInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAccount = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  gap: 0.2rem;

  .name {
    font-weight: 800;
    font-size: 16px;
  }

  .subscribers {
    font-size: 13px;
    color: ${({ theme: { grey3 } }) => grey3};
  }
`;

export const SubscribeButton = styled.div`
  padding: 0.6rem 0.8rem;
  border-radius: 200rem;
  background-color: ${({ theme: { text } }) => text};
  color: ${({ theme: { background } }) => background};
  margin-left: 2rem;
  font-size: 15px;
  font-weight: bold;

  &.subscribed {
    background-color: gold;
  }
`;

export const DetailsActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const DetailsActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme: { grey2 } }) => grey2};
  color: ${({ theme: { text } }) => text};
  border-radius: 100rem;
  padding: 0.5rem 0.8rem;

  .divider {
    border-left: 1px solid ${({ theme: { grey3 } }) => grey3};
  }
`;

export const SectionThumbsUp = styled.div`
  display: flex;
  align-items: center;
`;

export const ShareButton = styled.div`
  display: flex;
  align-items: center;
`;
