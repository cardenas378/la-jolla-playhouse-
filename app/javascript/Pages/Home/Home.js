import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { AddLocation } from "../../components/AddLocation";
import { getLocations, createLocation } from "../../components/api";

class Home extends React.Component {
  // componentDidMount() {
  //   this.props.changeSuccess(false);
  // }

  render() {
<<<<<<< HEAD
    return (
      <>
        Home Page
      </>
    );
=======
    return <p>Dashboard</p>;
>>>>>>> adds_location_table
  }
}
export { Home };
