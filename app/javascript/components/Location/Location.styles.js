import styled from "styled-components";

const StyledLocationCard = styled.div`
  background: ${props => props.theme.zircon};
  border: 1px solid ${props => props.theme.zircon};
  box-sizing: border-box;
  box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 1100px;
  height: 190px;
  padding-left: 45px;
  padding-top: 20px;
  h5 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  h2 {
    margin-bottom: 20px;
    margin-top: 0px;
  }
  h3 {
    margin-bottom: 0px;
    margin-top: 0px;
  }
  h4 {
    margin-bottom: 11px;
    margin-top: -1px;
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

export { StyledLocationCard };
