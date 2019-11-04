import styled from "styled-components";

const StyledLocationCard = styled.div`
  background: ${props => props.theme.zircon};
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 1100px;
  height: 170px;
  padding-left: 45px;
  padding-top: 25px;
  h5 {
    margin-bottom: 0px;
  }
`;

export { StyledLocationCard };
