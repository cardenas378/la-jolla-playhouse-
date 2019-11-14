import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";

import { AddBooking } from "components/AddBooking";

jest.mock("../api");

Enzyme.configure({ adapter: new Adapter() });

test("AddBooking form renders without an error", () => {
  const app = shallow(<AddBooking match={{ params: { location_id: 1 } }} />);

  expect(app.find("form").exists()).toBe(true);
});

test("AddBooking renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<AddBooking match={{ params: { location_id: 1 } }} />, div);
});

test("AddBooking tests all fields of input", () => {
  const app = shallow(<AddBooking match={{ params: { location_id: 1 } }} />);

  expect(app.find("#contact_first_name").exists()).toEqual(true);
  expect(app.find("#contact_last_name").exists()).toEqual(true);
  expect(app.find("#contact_phone_number").exists()).toEqual(true);
  expect(app.find("#contact_email").exists()).toEqual(true);
  expect(app.find("#contact_relationship_to_location").exists()).toEqual(true);
  expect(app.find("#button").exists()).toEqual(true);
});

describe("Test handlechange component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const app = shallow(
      <AddBooking
        handleNewBooking={mockCallBack}
        match={{ params: { location_id: 1 } }}
      />
    );
    const newName = "drew";

    app.find("#contact_first_name").simulate("change", {
      target: { name: "contact_first_name", value: newName }
    });
    app.find("#button").simulate("click");
    expect(mockCallBack.mock.calls[0]).toEqual([
      {
        contact_first_name: newName,
        contact_last_name: "",
        contact_phone_number: "",
        contact_email: "",
        contact_relationship_to_location: ""
      }
    ]);
  });
});
