import PropTypes from "prop-types";
import React from "react";

import { StyledRadioButton } from "./RadioButton.styles";

const RadioButton = ({ name, label, value, onChange }) => (
  <StyledRadioButton>
    <input name={name} onChange={onChange} type="radio" value={value} />
    <span>{label}</span>
  </StyledRadioButton>
);

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export { RadioButton };
