import styled from "styled-components";

const StyledLocationContact = styled.div`
  width: 710px;
  height: 60px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    flex: 1;
  }

  svg {
    margin-right: 5px;
    fill: ${props => props.theme.funBlue};
    float: left;
    position: relative;
    top: 5px;
  }

  p {
    margin: 0;
    padding: 0;
  }
  h4 {
    margin-bottom: 0px;
    margin-top: 0px;
    display: flex;
    justify-content: space-between;
  }
  h6 {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
  }
`;

export { StyledLocationContact };
