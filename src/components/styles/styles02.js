import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  border: var(--darkColorFull) solid 1px;
  border-radius: 10px;
  padding: 0.5em;
  text-decoration: none;
  font-size: 1rem;
  color: var(--darkColorFull);

  transition: 0.1s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledH1 = styled.h1`
  font-weight: 900;
  color: var(--darkColorFull);
`;

export const LayerWrapper = styled.div``;
