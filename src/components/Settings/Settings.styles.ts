import styled from "styled-components";

export const StyledSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${({ theme: { text } }) => text};

  &:hover {
    background-color: ${({ theme: { grey2 } }) => grey2};
    cursor: pointer;
  }
`;

export const StyledSettings = styled.div`
  display: flex;
  flex-direction: column;
  top: 100%;
  z-index: 20000000000;
`;

export const StyledSettingsButton = styled.button`
  border-radius: 100rem;
  color: ${({ theme: { text } }) => text};
  background-color: ${({ theme: { grey2 } }) => grey2};
`;
