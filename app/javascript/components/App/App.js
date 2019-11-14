import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components/macro";

import { Home } from "../../Pages/Home";
import { Locations } from "../../Pages/Locations";
import { AddBooking } from "../AddBooking";
import { AddLocation } from "../AddLocation";
import { getLocations, createLocation } from "../api";
import { NavBar } from "../NavBar";
import GlobalStyle from "../styles/Global";
import Theme from "../styles/Theme";

import { StyledLayout } from "./App.styles";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      success: false
    };
  }

  componentDidMount() {
    getLocations().then(locations => {
      this.setState({ locations });
    });
  }

  handleNewLocation = location => {
    createLocation(location).then(location => {
      this.setState({ success: true });
      getLocations().then(locations => {
        this.setState({ locations });
      });
    });
  };

  changeSuccess = value => {
    this.setState({ success: value });
  };

  render() {
    const { locations, success } = this.state;

    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <StyledLayout>
          <Router>
            <NavBar />

            <main>
              <Route
                exact
                path="/AddLocation"
                render={props => {
                  return (
                    <AddLocation
                      {...props}
                      handleNewLocation={this.handleNewLocation}
                      success={success}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/Locations"
                render={props => {
                  return (
                    <Locations
                      {...props}
                      changeSuccess={this.changeSuccess}
                      locations={locations}
                      success={success}
                    />
                  );
                }}
              />

              <Route
                exact
                path="/"
                render={props => {
                  return <Home {...props} />;
                }}
              />

              <Route
                exact
                path="/AddBooking"
                render={props => {
                  return (
                    <AddBooking
                      {...props}
                      changeSuccess={this.changeSuccess}
                      locations={locations}
                    />
                  );
                }}
              />
            </main>
          </Router>
        </StyledLayout>
      </ThemeProvider>
    );
  }
}

export { App };
