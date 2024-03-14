import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100%;
  height: 5.8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const HeaderMoreSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  position: relative;
`;

export const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
`;
