import styled from "styled-components";

const StyledInput = styled.input`
  left: ${props => props.theme.contentPaddingLeft};
  right: 0%;
  top: 31.25%;
  bottom: 0%;
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 500px;
  height: 65px;
  margin-bottom: 40px;
  font-size: 25px;
`;

export { StyledInput };
