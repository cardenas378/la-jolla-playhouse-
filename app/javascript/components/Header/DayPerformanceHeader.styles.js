import styled from "styled-components";

const DayPerformanceStyledHeader = styled.header`
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
