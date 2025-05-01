import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 14px;

  &.logo {
    letter-spacing: -1px;
    font-size: 22px;
    font-family: "Oswald", sans-serif;
  }
  &.auth {
    color: ${(props) => props.theme.authBlue};
    font-weight: bold;
  }
  &.text_category {
    font-size: 16px;
    font-style: italic;
  }
  &.showMore {
    margin-top: 14px;
    font-size: 16px;
    font-weight: bold;
  }
`;
