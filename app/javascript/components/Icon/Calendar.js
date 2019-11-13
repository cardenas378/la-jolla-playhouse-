import PropTypes from "prop-types";
import React from "react";

const Calendar = ({ className, height, width }) => (
  <svg
    className={className}
    height={height}
    viewBox="0 0 32 32"
    width={width}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.72119 20.4099H27.2786V21.9836H4.72119V20.4099Z" />
    <path d="M0.786865 11.4918H31.2131V13.0656H0.786865V11.4918Z" />
    <path d="M8.39335 1V8.86885H6.81958V1H8.39335Z" />
    <path d="M25.1802 1V8.86885H23.6064V1H25.1802Z" />
    <path d="M0 4.14755H8.39344V5.72132H1.57377V29.3279H30.4262V5.72132H26.2295V4.14755H32V30.9016H0V4.14755Z" />
    <path d="M9.44287 4.14755H25.1806V5.72132H9.44287V4.14755Z" />
    <path d="M12.5904 15.1639V27.2295H11.0166V15.1639H12.5904Z" />
    <path d="M20.9834 15.1639V27.2295H19.4097V15.1639H20.9834Z" />
  </svg>
);

Calendar.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string
};

export { Calendar };
