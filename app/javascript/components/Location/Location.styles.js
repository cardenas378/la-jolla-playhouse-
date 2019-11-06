import styled from "styled-components";

const StyledLocationCard = styled.div`
  background: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.zircon};
  border-left: 20px solid ${props => props.theme.yaleBlue};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-left: 45px;
  padding-top: 20px;
  margin-right: 65px;
  margin-left: 35px;
  margin-bottom: 25px;
  margin-top: 30px;
  h5 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  h2 {
    padding-bottom: 20px;
    line-height: 4.4rem;
    margin: 0px;
  }

`;


export { StyledLocationCard };
