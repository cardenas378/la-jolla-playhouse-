import PropTypes from "prop-types";
import React from "react";

import { StyledSubmitButton } from "./SubmitButton.styles";

const SubmitButton = ({ onClick }) => (
  <StyledSubmitButton onClick={onClick}>
    <span>SUBMIT</span>
  </StyledSubmitButton>
);

SubmitButton.propTypes = {
  onClick: PropTypes.func
};

export { SubmitButton };
