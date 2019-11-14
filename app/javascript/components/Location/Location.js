import PropTypes from "prop-types";
import React from "react";

import { StyledCardLabel, StyledCardTitle } from "../styles/Typography";

import { StyledLocationCard } from "./Location.styles";
import { LocationContact } from "./LocationContact";

const Location = props => (
  <StyledLocationCard
    className={props.location_type && props.location_type.toLowerCase()}
  >
    <StyledCardLabel>{props.location_type}</StyledCardLabel>
    <StyledCardTitle>{props.name}</StyledCardTitle>
    <LocationContact
      contact_email={props.contact_email}
      contact_phone_number={props.contact_phone_number}
      first_name={props.contact_first_name}
      last_name={props.contact_last_name}
    />
  </StyledLocationCard>
);

Location.propTypes = {
  location_type: PropTypes.string,
  name: PropTypes.string
};

export { Location };
