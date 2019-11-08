import React from "react";
import { Link, Redirect } from "react-router-dom";

import { getLocations, createLocation } from "../../components/api";
import { Header, AddLocation, AddLocationLink } from "../../components/index";
import { Location } from "../../components/Location";

class Locations extends React.Component {
  handleSuccess() {
    this.props.changeSuccess(false);
  }

  // componentDidMount() {
  //   this.props.changeSuccess(false)
  // }
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
              key={location.id}
              location_type={location.location_type}
              name={location.name}
              id="location"
            />
          );
        })}
      </>
    );
  }
}
export { Locations };
