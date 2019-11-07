import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAddLocationLink = styled(Link)`
  background: ${props => props.theme.tarawera};
  border-radius: 50px;
  width: 235px;
  height: 45px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.pureWhite};
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.broom};
    color: ${props => props.theme.funBlue};
  }
  span {
    font-family: ${props => props.theme.sansSerif};
    text-align: center;
    font-weight: ${props => props.theme.weightBold};
    font-size: 16px;
    letter-spacing: 0.1rem;
  }
  svg {
    height: 20px;
    width: 20px;
    margin-right: 10px;
    fill: currentColor;
    position: relative;
  }
`;

export { StyledAddLocationLink };
