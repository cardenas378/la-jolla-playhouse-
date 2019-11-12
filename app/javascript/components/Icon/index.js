import React from "react";

import { Calendar } from "./Calendar";
import { Chevron } from "./Chevron";
import { Search } from "./Search";
import { Vector } from "./Vector";

/* eslint complexity: ["error", {"max": 7}]*/

const Icon = props => {
  switch (props.name.toLowerCase()) {
    case "chevron":
      return <Chevron {...props} />;
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

export { Icon };
