import React from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function Button({ className, isDisabled, children, doOnClick }) {
  let button = (
    <button className={`button ${className}`} onClick={doOnClick} type="button">
      {children}
    </button>
  );
  if (isDisabled) {
    button = (
      <button
        className={`button ${className}`}
        disabled
        onClick={doOnClick}
        type="button"
      >
        {children}
      </button>
    );
  }
  return button;
}

Button.defaultProps = {
  className: "",
  children: null,
  doOnClick: null,
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  doOnClick: PropTypes.func,
};

export default Button;
