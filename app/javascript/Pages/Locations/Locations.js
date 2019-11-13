import PropTypes from "prop-types";
import React from "react";
import { Link, Redirect } from "react-router-dom";

import { getLocations, createLocation } from "../../components/api";
import { Header, AddLocation, AddLocationLink } from "../../components/index";
import { Location } from "../../components/Location";

class Locations extends React.Component {
  render() {
    const { locations } = this.props;

    return (
      <>
        <Header id="header" name="Locations">
          <AddLocationLink />
        </Header>
        {locations.map(location => {
          return (
            <Location
              contact_email={location.contact_email}
              contact_first_name={location.contact_first_name}
              contact_last_name={location.contact_last_name}
              contact_phone_number={location.contact_phone_number}
              id="location"
              key={location.id}
              location_type={location.location_type}
              locationID={location.id}
              name={location.name}
            />
          );
        })}
      </>
    );
  }
}

Locations.propTypes = {
  changeSuccess: PropTypes.func,
  conctact_email: PropTypes.string,
  contact_first_name: PropTypes.string,
  contact_last_name: PropTypes.string,
  contact_phone_number: PropTypes.string,
  id: PropTypes.number,
  location_type: PropTypes.string,
  locations: PropTypes.array,
  name: PropTypes.string
};

export { Locations };
