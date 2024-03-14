import styled from "styled-components";

export const Icon = styled.div<{ $showBackground?: boolean }>`
  background-color: ${({ theme, $showBackground }) =>
    $showBackground ? theme.grey2 : "transparent"};
  border-radius: 100rem;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  cursor: pointer;

  &.menu {
    &:hover {
      background-color: ${({ theme: { grey2 } }) => grey2};
    }
  }
`;
