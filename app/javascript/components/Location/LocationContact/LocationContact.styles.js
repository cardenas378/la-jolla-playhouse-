import styled from "styled-components";

const StyledLocationContact = styled.div`
  width: 100%;
  padding: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  postition: relative;
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
  /* "LOCATION CONTACT" HEADING */
  h3 {
    margin: 0 0 5px;
  }
  /* CONTACT NAME */
  h4 {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    position: relative;
    min-height: 30px;
  }
  /* EMAIL AND PHONE NUMBER FIELDS */
  p {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

export { StyledLocationContact };
