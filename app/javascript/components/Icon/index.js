import PropTypes from "prop-types";
import React from "react";

import { Calendar } from "./Calendar";
import { Chevron } from "./Chevron";
import { Email } from "./Email";
import { Phone } from "./Phone";
import { Plus } from "./Plus";
import { Search } from "./Search";
import { Vector } from "./Vector";

/* eslint complexity: ["error", {"max": 8}]*/

const Icon = props => {
  switch (props.name.toLowerCase()) {
    case "chevron":
      return <Chevron {...props} />;
    case "email":
      return <Email {...props} />;
    case "phone":
      return <Phone {...props} />;
    case "plus":
      return <Plus {...props} />;
    case "search":
      return <Search {...props} />;
    case "vector":
      return <Vector {...props} />;
    case "calendar":
      return <Calendar {...props} />;
    default:
      return <div />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

Icon.defaultProps = {
  className: "",
  height: "32",
  width: "32"
};

export { Icon };
