import React from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../Icon";

import { StyledAddBookingLink } from "./AddBookingLink.styles";

const AddBookingLink = props => (
  <StyledAddBookingLink to={`/AddBooking/${props.locationID}`}>
    <Icon name="plus" />
    <span>ADD A BOOKING</span>
  </StyledAddBookingLink>
);

export { AddBookingLink };
