import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../Icon";

import { StyledAddLocationLink } from "./AddLocationLink.styles";

const AddLocationLink = () => (
  <StyledAddLocationLink to="/AddLocation">
    <Icon name="plus" />
    <span>ADD A LOCATION</span>
  </StyledAddLocationLink>
);

export { AddLocationLink };
