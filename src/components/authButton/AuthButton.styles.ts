import styled from "styled-components";

export const StyledAuthButton = styled.div`
  width: 150px;
  color: ${({ theme: { authBlue } }) => authBlue};
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid ${({ theme: { grey2 } }) => grey2};
  padding: 0.4rem 0.7rem;
  border-radius: 10rem;
`;
