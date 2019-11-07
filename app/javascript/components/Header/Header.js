import React from "react";

import { StyledHeader, StyledHeaderButton } from "./Header.styles";

const Header = ({ name, children, className }) => (
  <StyledHeader className={className}>
    <>
      <h1>{name}</h1>
      <StyledHeaderButton>{children}</StyledHeaderButton>
    </>
  </StyledHeader>
);

export { Header };
