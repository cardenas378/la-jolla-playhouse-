import React from "react";
import { Link } from "react-router-dom";
import { getLocations, createLocation } from "../../components/api";
import { Header, AddLocation, SubmitButton } from "../../components/index";
import { Location } from "../../components/Location"
class Locations extends React.Component {
  componentDidMount() {
    this.props.changeSuccess(false);
  }

  render() {
    return (
      <>
        <Header name="Locations" />

        {this.props.locations.map(location => {
          return (
            <Location key={location.id} />
          );
        })}
      </>
    );
  }
}
export { Locations };
