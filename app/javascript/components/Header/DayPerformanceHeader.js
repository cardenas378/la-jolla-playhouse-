import React from "react";

import { DayPerformanceStyledHeader } from "./DayPerformanceHeader.styles";

const DayPerformanceHeader = ({ name }) => (
  <DayPerformanceStyledHeader>
    <h2>{name}</h2>
  </DayPerformanceStyledHeader>
);

export { DayPerformanceHeader };
