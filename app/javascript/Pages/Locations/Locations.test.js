import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router";

import { Locations } from "Pages/Locations";

import App from "../../components/App";

Enzyme.configure({ adapter: new Adapter() });

test("app renders with state objects", () => {
  const locations = [
    {
      id: 1,
      name: null,
      location_type: null,
      contact_first_name: null,
      contact_phone_number: null,
      contact_email: null,
      contact_relationship: null,
      address_city: null,
      address_state: null,
      address_zip: null,
      phone_number: null,
      reference: null,
      school_principal: null,
      principal_email: null,
      school_district: null,
      county_district: null,
      city_district: null,
      created_at: "2019-11-04T17:11:04.945Z",
      updated_at: "2019-11-04T17:11:04.945Z",
      contact_last_name: null,
      address_1: null,
      address_2: null
    }
  ];
});

// test("Locations renders without crashing", () => {
//   const div = document.createElement("div");

//   ReactDOM.render(<Locations />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// describe("Test Add A Location button routes you to add location page", () => {
//   it("Test click event", () => {
//     const locations = [
//       {
//         id: 1,
//         name: null,
//         location_type: null,
//         contact_first_name: null,
//         contact_phone_number: null,
//         contact_email: null,
//         contact_relationship: null,
//         address_city: null,
//         address_state: null,
//         address_zip: null,
//         phone_number: null,
//         reference: null,
//         school_principal: null,
//         principal_email: null,
//         school_district: null,
//         county_district: null,
//         city_district: null,
//         created_at: "2019-11-04T17:11:04.945Z",
//         updated_at: "2019-11-04T17:11:04.945Z",
//         contact_last_name: null,
//         address_1: null,
//         address_2: null
//       }
//     ];
//     const wrapper = mount(
//       // <MemoryRouter initialEntries={["/Locations"]}>
//       <App locations={locations} />
//       // </MemoryRouter>
//     );

//     expect(wrapper.find("#header"));
//   });
// });
