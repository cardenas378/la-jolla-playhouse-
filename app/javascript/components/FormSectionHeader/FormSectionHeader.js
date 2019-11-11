import PropTypes from "prop-types";
import React from "react";

import { StyledH3 } from "./FormSectionHeader.styles";

const FormSectionHeader = ({ name }) => (
  <>
    <br />
    <StyledH3>{name}</StyledH3>
  </>
);

FormSectionHeader.propTypes = {
  name: PropTypes.string
};

export { FormSectionHeader };
