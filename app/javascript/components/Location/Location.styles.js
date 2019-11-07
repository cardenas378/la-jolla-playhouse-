import styled from "styled-components";

const StyledLocationCard = styled.div`
  background: ${props => props.theme.pureWhite};
  border: 1px solid ${props => props.theme.zircon};
  border-left: 20px solid ${props => props.theme.yaleBlue};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px 0 20px 25px;
  margin: 30px 65px 25px 35px;
  &.school {
    border-left: 20px solid ${props => props.theme.lightSteelBlue};
  }
  &.non-profit {
    border-left: 20px solid ${props => props.theme.yaleBlue};
  }

  &.corporate {
    border-left: 20px solid ${props => props.theme.oxfordBlue};
  }
  h5 {
    margin-bottom: 0px;
    min-height: 20px;
    margin-top: 0px;
  }
  h2 {
    line-height: 4.4rem;
    margin: 0 0 20px;
    min-height: 4.4rem;
  }
`;

export { StyledLocationCard };
