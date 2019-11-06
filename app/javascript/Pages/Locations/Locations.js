import React from "react";
import { Link } from "react-router-dom";
import { getLocations, createLocation } from "../../components/api";
import { Header, AddLocation, AddLocationLink } from "../../components/index";
import { Location } from "../../components/Location";

class Locations extends React.Component {

  componentDidMount() {
    this.props.changeSuccess(false);
  }

  render() {
    const { locations } = this.props;

    return (
      <>
        <Header name="Locations" />
        <AddLocationLink />
        {locations.map(location => {
          return (
            <Location
              key={location.id}
              location_type={location.location_type}
              name={location.name}
              contact_first_name={location.contact_first_name}
              contact_last_name={location.contact_last_name}
              contact_email={location.contact_email}
              contact_phone_number={location.contact_phone_number}
            />
          )
        })}
      </>
    );
  }
}
export { Locations };
