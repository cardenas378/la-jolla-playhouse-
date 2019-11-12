import styled from "styled-components";

const Thirds = styled.input`
  left: ${props => props.theme.contentPaddingLeft};
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  width: 314px;
  height: 65px;
  margin-bottom: 40px;
  font-size: 25px;
`;

export { Thirds };
