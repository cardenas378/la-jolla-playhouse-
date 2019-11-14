/* eslint-disable max-statements */
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";

import { AddLocation } from "components/AddLocation";

Enzyme.configure({
  adapter: new Adapter()
});

test("AddLocation form renders without an error", () => {
  const app = shallow(<AddLocation />);

  expect(app.find("form").exists()).toBe(true);
});

test("AddLocation renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddLocation />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("AddLocation tests all fields of input", () => {
  const app = shallow(<AddLocation />);

  expect(app.find("#name").exists()).toEqual(true);
  expect(app.find("#school").exists()).toEqual(true);
  expect(app.find("#non-profit").exists()).toEqual(true);
  expect(app.find("#corporate").exists()).toEqual(true);
  expect(app.find("#contact_first_name").exists()).toEqual(true);
  expect(app.find("#contact_last_name").exists()).toEqual(true);
  expect(app.find("#contact_phone_number").exists()).toEqual(true);
  expect(app.find("#contact_email").exists()).toEqual(true);
  expect(app.find("#contact_relationship").exists()).toEqual(true);
  expect(app.find("#address_1").exists()).toEqual(true);
  expect(app.find("#address_2").exists()).toEqual(true);
  expect(app.find("#address_city").exists()).toEqual(true);
  expect(app.find("#address_state").exists()).toEqual(true);
  expect(app.find("#address_zip").exists()).toEqual(true);
  expect(app.find("#phone_number").exists()).toEqual(true);
  expect(app.find("#reference").exists()).toEqual(true);
  expect(app.find("#button").exists()).toEqual(true);
});

test("If Type is a school", () => {
  const school = shallow(<AddLocation />);

  school.find("#school").simulate("change", {
    target: {
      name: "location_type",
      value: "School"
    }
  });

  expect(school.find("#school_principal").exists()).toEqual(true);
  expect(school.find("#principal_email").exists()).toEqual(true);
  expect(school.find("#school_district").exists()).toEqual(true);
});

test("If Type is a non-profit", () => {
  const other = shallow(<AddLocation />);

  other.find("#corporate").simulate("change", {
    target: {
      name: "location_type",
      value: "Corporate"
    }
  });

  expect(other.find("#county_district").exists()).toEqual(true);
  expect(other.find("#city_district").exists()).toEqual(true);
});

test("If Type is a corporate", () => {
  const other = shallow(<AddLocation />);

  other.find("#non-profit").simulate("change", {
    target: {
      name: "location_type",
      value: "Non-Profit"
    }
  });

  expect(other.find("#county_district").exists()).toEqual(true);
  expect(other.find("#city_district").exists()).toEqual(true);
});

describe("Test handlechange component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const app = shallow(<AddLocation handleNewLocation={mockCallBack} />);
    const newName = "juan";

    app.find("#name").simulate("change", {
      target: {
        name: "name",
        value: newName
      }
    });
    app.find("#button").simulate("click");
    expect(mockCallBack.mock.calls[0]).toEqual([
      {
        address_1: "",
        address_2: "",
        address_city: "San Diego",
        address_state: "CA",
        address_zip: "",
        city_district: "",
        contact_email: "",
        contact_first_name: "",
        contact_last_name: "",
        contact_phone_number: "",
        contact_relationship: "",
        county_district: "",
        location_type: "",
        name: newName,
        phone_number: "",
        principal_email: "",
        reference: "",
        school_principal: "",
        school_district: ""
      }
    ]);
  });
});
