import styled from "styled-components";

const StyledLocationContact = styled.div`
  width: 710px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  postition: relative;
  margin-bottom: 10px;
  div {
    flex: 1;
    justify-content: space-between;

  }

  svg {
    margin-right: 5px;
    fill: ${props => props.theme.funBlue};
    float: left;
    position: relative;
    top: 5px;
  }

  h3 {
    margin: 0;
    position: absolute;
  }

  h4 {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  p {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export { StyledLocationContact };
