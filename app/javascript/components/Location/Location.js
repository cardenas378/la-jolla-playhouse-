import React from "react";
import PropTypes from 'prop-types';
import { LocationContact } from "./LocationContact";

import {
  StyledCardLabel,
  StyledCardTitle,
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy
} from "../styles/Typography";

import { StyledLocationCard, SchoolCard, NonSchoolCard } from "./Location.styles";

const Location = (props) => (
  <StyledLocationCard>
    <StyledCardLabel>{props.location_type}</StyledCardLabel>
    <StyledCardTitle>{props.name}</StyledCardTitle>
    <LocationContact
      first_name={props.contact_first_name}
      last_name={props.contact_last_name}
      contact_email={props.contact_email}
      contact_phone_number={props.contact_phone_number}
    />
  </StyledLocationCard>
);

Location.propTypes = {
  location_type: PropTypes.string,
  name: PropTypes.string
}

export { Location };
