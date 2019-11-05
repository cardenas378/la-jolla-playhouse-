import React from "react";

import { StyledAddLocationButton } from "./AddLocationButton.styles";

const AddLocationButton = ({ onClick }) => (
  <StyledAddLocationButton onClick={onClick}>
    <span>ADD A LOCATION</span>
  </StyledAddLocationButton>
);

export { AddLocationButton };
