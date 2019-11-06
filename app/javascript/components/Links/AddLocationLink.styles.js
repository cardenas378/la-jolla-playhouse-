import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledAddLocationLink = styled.div`
  background: ${props => props.theme.tarawera};
  border-radius: 50px;
  width: 235px;
  height: 45px;
  top: 15px;
  right: 90px;
  position: absolute;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    color: white;
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
    fill: ${props => props.theme.pureWhite};
    position: relative;
  }
`;

export { StyledAddLocationLink };
