import React from "react";

function Button({class_name, isDisabled, children, doOnClick}){
  return (
      <button className={"button "+class_name} disabled={isDisabled} onClick={doOnClick}>
        {children}
      </button>
  );
}

export default Button;
