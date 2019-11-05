import React from "react";

import { StyledLocationContact } from "./LocationContact.styles";
import { Icon } from "../../Icon";

import {
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy,
  StyledCardLabel
} from "../../styles/Typography";

import { StyledLocationCard } from "../Location.styles";

const LocationContact = () => (
  <StyledLocationContact>
    <div>
      <StyledTertiaryHeading>Location Contact</StyledTertiaryHeading>
      <br />
      <StyledCardMeta>Contact Name</StyledCardMeta>
    </div>
    <div>
      <Icon name="Email" width="16" height="16"/>
      <StyledBodyCopy>Contact Email</StyledBodyCopy>
    </div>
    <div>
      <Icon name="Phone" width="16" height="16"/>
      <StyledBodyCopy>Contact Phone Number</StyledBodyCopy>
    </div>
  </StyledLocationContact>
);

export { LocationContact };
