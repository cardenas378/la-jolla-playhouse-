import React from "react";

import { StyledSubmitButton } from "./SubmitButton.styles";

const SubmitButton = ({ onClick }) => (
  <StyledSubmitButton onClick={onClick}>
    <span>SUBMIT</span>
  </StyledSubmitButton>
);

export { SubmitButton };
