import styled from "styled-components";

const StyledLocationCard = styled.div`
  background: ${props => props.theme.zircon};
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 1100px;
  height: 170px;
  padding-left: 35px;
  padding-top: 25px;
  text {
    margin-top: 20px;
    margin-left: 45px;
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme}
  }
`;

export { StyledLocationCard };
