import styled from "styled-components";

const DayPerformanceStyledHeader = styled.header`
//   background-color: ${props => props.theme.funBlue};
//   border-radius: 0px 0px 0 30px;
//   padding: 40px 30px 90px;

  h2 {
    color: ${props => props.theme.funBlue};
    font-family: ${props => props.theme.nunito};
    font-weight: ${props => props.theme.weightBlack};
    text-transform: uppercase;
    font-size: 4.8rem;
    line-height: 65px;
    margin: 135px 0 0 0;
    padding: 0;
  }
`;

export { DayPerformanceStyledHeader };