import React from "react";

import { LocationContact } from "./LocationContact";

import {
  StyledCardLabel,
  StyledCardTitle,
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy
} from "../styles/Typography";

import { StyledLocationCard } from "./Location.styles";

const Location = () => (
  <StyledLocationCard>
    <StyledCardLabel>School</StyledCardLabel>
    <StyledCardTitle>Location Name</StyledCardTitle>
    <LocationContact />
  </StyledLocationCard>
);

export { Location };
