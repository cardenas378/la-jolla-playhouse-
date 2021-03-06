import PropTypes from "prop-types";
import React from "react";

const Search = ({ className, height, width }) => (
  <svg
    className={className}
    height={height}
    viewBox="0 0 32 32"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.45779 13.4194C3.45779 7.91774 7.91774 3.45779 13.4194 3.45779C18.921 3.45779 23.3809 7.91774 23.3809 13.4194C23.3809 18.921 18.921 23.3809 13.4194 23.3809C7.91774 23.3809 3.45779 18.921 3.45779 13.4194ZM13.4194 2C7.11262 2 2 7.11262 2 13.4194C2 19.7261 7.11262 24.8387 13.4194 24.8387C15.6871 24.8387 17.8005 24.1777 19.5773 23.0378L26.5394 29.9999L29.9999 26.5395L23.0377 19.5773C24.1777 17.8005 24.8387 15.6872 24.8387 13.4194C24.8387 7.11262 19.7261 2 13.4194 2ZM22.1633 20.7645C21.7382 21.2701 21.27 21.7382 20.7644 22.1634L26.5394 27.9383L27.9382 26.5395L22.1633 20.7645Z" />
  </svg>
);

Search.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export { Search };
