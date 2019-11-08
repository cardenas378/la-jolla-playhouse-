import React from "react";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";
import { Locations } from "Pages/Locations";
import { AddLocation } from "../../components/AddLocation";
import Enzyme, { mount, shallow, render } from "enzyme";
import App from "../../components/App";
Enzyme.configure({ adapter: new Adapter() });

test("Locations renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Locations />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Test Add A Location button routes you to add location page", () => {
  it("Test click event", () => {
    const wrapper = shallow(
      <MemoryRouter initialEntries={["/Locations"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find("#header"))
  });
});
