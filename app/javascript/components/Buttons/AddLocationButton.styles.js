import styled from "styled-components";

const StyledAddLocationButton = styled.button`
  background: ${props => props.theme.tarawera};
  border-radius: 50px;
  width: 235px;
  height: 45px;
  top: 15px;
  right: 90px;
  position: absolute;
  span {
    color: white;
    font-family: ${props => props.theme.sansSerif};
    text-align: center;
    font-weight: ${props => props.theme.weightBold};
    font-size: 16px;
    letter-spacing: 0.1rem;
  }
`;

export { StyledAddLocationButton };
