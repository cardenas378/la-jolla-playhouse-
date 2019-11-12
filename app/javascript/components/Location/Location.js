import PropTypes from "prop-types";
import React from "react";

import { AddBookingLink } from "../index";
import {
  StyledCardLabel,
  StyledCardTitle,
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy
} from "../styles/Typography";

import { StyledLocationCard } from "./Location.styles";
import { LocationContact } from "./LocationContact";

const Location = props => (
  <StyledLocationCard
    className={props.location_type && props.location_type.toLowerCase()}
  >
    <div className="body">
      <StyledCardLabel>{props.location_type}</StyledCardLabel>
      <StyledCardTitle>{props.name}</StyledCardTitle>
      <LocationContact
        contact_email={props.contact_email}
        contact_phone_number={props.contact_phone_number}
        first_name={props.contact_first_name}
        last_name={props.contact_last_name}
      />
    </div>
    <div className="links">
      <AddBookingLink />
      <AddBookingLink />
    </div>
  </StyledLocationCard>
);

Location.propTypes = {
  location_type: PropTypes.string,
  name: PropTypes.string
};

export { Location };
