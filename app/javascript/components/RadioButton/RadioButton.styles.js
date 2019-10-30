import styled from "styled-components";

import check from "./images/radio-button--checked";
import uncheck from "./images/radio-button--unchecked";

const StyledRadioButton = styled.label`
  color: ${props => props.theme.black};
  cursor: pointer;
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.6rem;
  line-height: 30px;

  input[type="radio"] + span {
    background: url(${uncheck}) left top no-repeat;
    display: inline-block;
    margin-right: 25px;
    min-height: 30px;
    padding-left: 40px;
    position: relative;
    margin-left: -15px;
  }

  input[type="radio"]:checked + span {
    background: url(${check}) left top no-repeat;
  }
`;

export { StyledRadioButton };
