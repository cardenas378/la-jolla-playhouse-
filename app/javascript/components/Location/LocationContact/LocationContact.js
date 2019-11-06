import React from "react";
import PropTypes from 'prop-types';
import { StyledLocationContact } from "./LocationContact.styles";
import { Icon } from "../../Icon";

import {
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy,
  StyledCardLabel
} from "../../styles/Typography";

import { StyledLocationCard } from "../Location.styles";

const LocationContact = (props) => (
  <StyledLocationContact>
    <div>
      <StyledTertiaryHeading>Location Contact</StyledTertiaryHeading>
      <br />
      <StyledCardMeta>{props.first_name} {props.last_name}</StyledCardMeta>
    </div>
    <div>
      <Icon name="Email" width="16" height="16"/>
      <StyledBodyCopy>{props.contact_email}</StyledBodyCopy>
    </div>
    <div>
      <Icon name="Phone" width="16" height="16"/>
      <StyledBodyCopy>{props.contact_phone_number}</StyledBodyCopy>
    </div>
  </StyledLocationContact>
);

LocationContact.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  contact_email: PropTypes.string,
  contact_phone_number: PropTypes.string
}

export { LocationContact };
