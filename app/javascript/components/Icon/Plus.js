import PropTypes from "prop-types";
import React from "react";

const Plus = ({ className, height, width }) => (
  <svg
    className={className}
    height={height}
    viewBox="0 0 32 32"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.5 4C17.3284 4 18 4.67157 18 5.5V26.5C18 27.3284 17.3284 28 16.5 28C15.6716 28 15 27.3284 15 26.5V5.5C15 4.67157 15.6716 4 16.5 4Z" />
    <path d="M4 15.5C4 14.6716 4.67157 14 5.5 14H26.5C27.3284 14 28 14.6716 28 15.5C28 16.3284 27.3284 17 26.5 17H5.5C4.67157 17 4 16.3284 4 15.5Z" />
  </svg>
);

Plus.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

Plus.defaultProps = {
  className: "",
  height: "32",
  width: "32"
};

export { Plus };
