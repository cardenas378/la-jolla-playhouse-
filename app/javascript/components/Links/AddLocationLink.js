import React from "react";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";

import { StyledAddLocationLink } from "./AddLocationLink.styles";

const AddLocationLink = () => (
  <Link to="/AddLocation">
    <StyledAddLocationLink>
        <Icon name="plus" />
        <span>ADD A LOCATION</span>
    </StyledAddLocationLink>
  </Link>
);

export { AddLocationLink };
