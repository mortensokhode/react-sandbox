import styled from "styled-components";
import '../../varDefinitions.css';

export const StyledHeader = styled.header`
  margin: 0 auto;
  padding: 1rem;
  background-color: var(--lightBackGround);

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border-bottom: var(--lightBackGround) solid 1px;
`;

export const StyledRow = styled.div`
    background-color: var(--lightBackGround);
    color: var(--darkColorFull);
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
`;
