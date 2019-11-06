import React from "react";
import PropTypes from "prop-types";
import { Chevron } from "./Chevron";
import { Search } from "./Search";
import { Phone } from "./Phone";
import { Email } from "./Email";
import { Plus } from "./Plus";

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
    default:
      return <div />;
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string
};

Icon.defaultProps = {
  className: "",
  height: "32",
  width: "32"
};

export { Icon };
