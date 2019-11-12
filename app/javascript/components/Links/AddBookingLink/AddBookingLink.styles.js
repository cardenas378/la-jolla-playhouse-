import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAddBookingLink = styled(Link)`
  background: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.zircon};
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.funBlue};
  &:hover {
    text-decoration: none;
    background: ${props => props.theme.funBlue};
    color: ${props => props.theme.pureWhite};
  }
  span {
    font-family: ${props => props.theme.sansSerif};
    text-align: center;
    font-weight: ${props => props.theme.weightBold};
    font-size: 16px;
    letter-spacing: 0.1rem;
  }
  svg {
    height: 25px;
    width: 25px;
    margin-right: 10px;
    fill: currentColor;
    position: relative;
  }
`;

export { StyledAddBookingLink };
