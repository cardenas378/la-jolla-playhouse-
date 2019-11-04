import React from "react";
import { Link } from "react-router-dom";

import { AddLocation } from "../../components/AddLocation";
import { getLocations, createLocation } from "../../components/api";

class Locations extends React.Component {
  componentDidMount() {
    this.props.changeSuccess(false);
  }

  render() {
    return (
      <>
        {this.props.locations.map(location => {
          return (
            <div key={location.id} style=={{border:"1px black solid"}}>
              <h1>Location: {location.name}</h1>;
            </div>
          )
        })}
      </>
    );
  }
}
export { Locations };
