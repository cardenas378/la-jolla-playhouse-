import PropTypes from "prop-types";
import React from "react";

import { Icon } from "../../Icon";
import {
  StyledTertiaryHeading,
  StyledCardMeta,
  StyledBodyCopy
} from "../../styles/Typography";

import { StyledLocationContact } from "./LocationContact.styles";

const LocationContact = props => (
  <StyledLocationContact>
    <div>
      <StyledTertiaryHeading>Location Contact</StyledTertiaryHeading>
      <StyledCardMeta>
        {props.first_name} {props.last_name}
      </StyledCardMeta>
    </div>
    <div>
      {props.contact_email && (
        <>
          <Icon height="16" name="Email" width="16" />
          <StyledBodyCopy>{props.contact_email}</StyledBodyCopy>
        </>
      )}
    </div>
    <div>
      {props.contact_phone_number && (
        <>
          <Icon height="16" name="Phone" width="16" />
          <StyledBodyCopy>{props.contact_phone_number}</StyledBodyCopy>
        </>
      )}
    </div>
  </StyledLocationContact>
);

LocationContact.propTypes = {
  contact_email: PropTypes.string,
  contact_phone_number: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string
};

export { LocationContact };
