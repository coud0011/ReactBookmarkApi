import React from "react";

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

export default Button;
