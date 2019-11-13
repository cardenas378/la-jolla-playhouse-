import { textInputs } from "polished";
import React from "react";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { BookingSectionHeader } from "../FormSectionHeader";
import { Icon } from "../Icon";
import { PerformanceDateCalendar } from "../PerformanceDateCalendar/PerformanceDateCalendar";
import { StyledFormLayout } from "../styles/Forms";
import {
  BookingSlideOutPanel,
  DayPerformanceSlideOutPanel
} from "../styles/SlideOutPanel";
import { StyledLabel } from "../styles/Typography";
import { PerformanceDateInput } from "../TextInput";

import {
  AddBookingHeader,
  SaveBookingButton,
  BookingInput,
  DayPerformanceHeader
} from "..";

class AddBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        contact_first_name: "",
        contact_last_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship: "",
        reference: "",
        startDate: new Date()
      }
    };
  }

  static defaultProps = {
    location_id: "JSC Innovation Lab"
  };

  handleChange = (e, date) => {
    const { form } = this.state;
    const { name, value } = e.target;
    form[(name, date)] = value;

    this.setState({ form });
    this.setState({
      startDate: date
    });
  };
  handleClick = () => {
    const { form } = this.state;

    this.props.handleNewBooking(form);
  };

  render() {
    const { success } = this.props;

    const {
      contact_first_name,
      contact_last_name,
      contact_phone_number,
      contact_email,
      contact_relationship,
      reference,
      date
    } = this.state.form;

    console.log({ date });

    return (
      <>
        <AddBookingHeader
          location_id={this.props.location_id}
          name="Add a Booking"
        />

        <BookingSlideOutPanel>
          <BookingSectionHeader name="BOOKING CONTACT" />
          <form>
            <StyledFormLayout>
              <div className="half">
                <StyledLabel>First Name</StyledLabel>
                <BookingInput
                  id="contact_first_name"
                  name="contact_first_name"
                  onChange={this.handleChange}
                  placeholder="First Name"
                  type="text"
                  value={contact_first_name}
                />
              </div>
              <div className="half">
                <StyledLabel>Last Name</StyledLabel>
                <BookingInput
                  id="contact_last_name"
                  name="contact_last_name"
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  type="text"
                  value={contact_last_name}
                />
              </div>
              <div className="half">
                <StyledLabel>Phone Number</StyledLabel>
                <BookingInput
                  id="contact_phone_number"
                  name="contact_phone_number"
                  onChange={this.handleChange}
                  placeholder="(xxx) xxx-xxxx"
                  type="text"
                  value={contact_phone_number}
                />
              </div>
              <div className="half">
                <StyledLabel>Email Address</StyledLabel>
                <BookingInput
                  id="contact_email"
                  name="contact_email"
                  onChange={this.handleChange}
                  placeholder="example@email.com"
                  type="text"
                  value={contact_email}
                />
              </div>
              <div className="half">
                <StyledLabel>Relationship to Location</StyledLabel>
                <BookingInput
                  id="contact_relationship"
                  name="contact_relationship"
                  onChange={this.handleChange}
                  placeholder=" Event Coordinator"
                  type="text"
                  value={contact_relationship}
                />
              </div>
              <br />
            </StyledFormLayout>
          </form>
        </BookingSlideOutPanel>

        <DayPerformanceSlideOutPanel>
          <StyledFormLayout>
            <div className="half">
              <DayPerformanceHeader name="PERFORMANCES" />
              <StyledLabel>Day of Performance(s)</StyledLabel>
              <div>
                <PerformanceDateInput
                  id="performance_date"
                  name="performance_date"
                  onChange={this.handleChange}
                  type="date"
                  value={date}
                />
              </div>
            </div>

            <div className="full align-right">
              <SaveBookingButton
                id="button"
                onClick={this.handleClick}
                type="button"
              >
                SAVE BOOKING
              </SaveBookingButton>
            </div>
            {success && <Redirect to="/" />}
          </StyledFormLayout>
        </DayPerformanceSlideOutPanel>
      </>
    );
  }
}
export { AddBooking };
