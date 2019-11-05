import React from "react";
import { Redirect } from "react-router-dom";

import { getLocations, createLocation } from "../../components/api";
import { Header, AddLocation, AddLocationButton } from "../../components/index";
import { Location } from "../../components/Location";

class Locations extends React.Component {

  componentDidMount() {
    this.props.changeSuccess(false);
  }

  handleClick = () => {
    this.props.changeRedirect(true);
  };

  render() {
    if (this.props.redirect === true) {
      return <Redirect to="/AddLocation" />;
    }
    return (
      <>
        <Header name="Locations" />
        <AddLocationButton onClick={this.handleClick} />
        {this.props.locations.map(location => {
          return <Location key={location.id} />;
        })}
      </>
    );
  }
}
export { Locations };
