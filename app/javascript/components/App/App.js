import PropTypes from "prop-types";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

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

import {
  Header,
  AddBookingHeader,
  FormSectionHeader,
  StyledSelect,
  FullInput,
  RadioButton,
  SubmitButton,
  SaveBookingButton,
  HalfInput,
  ThirdInput
} from "..";

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
    });
  };

  changeSuccess = value => {
    this.setState({ success: value });
  };

  componentDidMount() {
    getLocations().then(locations => {
      this.setState({ locations });
    });
  }

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
                path="/AddBooking/:location_id"
                render={props => {
                  return (
                    <AddBooking
                      {...props}
                      changeSuccess={this.changeSuccess}
                      locations={this.state.locations}
                      success={this.state.success}
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

App.propTypes = {};

export { App };
