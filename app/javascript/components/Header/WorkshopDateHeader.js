import React from "react";

import { WorkshopDateStyledHeader } from "./WorkshopDateHeader.styles";

const WorkshopDateHeader = ({ name }) => (
  <WorkshopDateStyledHeader>
    <h2>{name}</h2>
  </WorkshopDateStyledHeader>
);

export { WorkshopDateHeader };
