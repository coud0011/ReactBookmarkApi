import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBackwardFast, faCaretLeft, faCaretRight, faForwardFast} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button.jsx";

function Pagination({pagination}){
  let first=true;
  let previous = true;
  let next = true;
  let last = true;
  if (pagination === null){
    first = false;
    previous = false
  }
  let disableStyle= {color: "#35466C",};
  let baseStyle = {color: "#6b8cd9",};
  return (
    <nav className="pagination">
      <Button class_name="pagination__info" isDisabled={false} doOnClick={()=>{}}>
        <FontAwesomeIcon icon={faBackwardFast} style={baseStyle} size={"2xl"} />
      </Button>
      <Button class_name="pagination__info" isDisabled={true} doOnClick={()=>{}}>
        <FontAwesomeIcon icon={faCaretLeft} style={disableStyle} size={"2xl"} />
      </Button>
      <Button class_name="pagination__info" isDisabled={false} doOnClick={()=>{}}>
        1
      </Button>
      <Button class_name="pagination__info" isDisabled={false} doOnClick={()=>{}}>
        <FontAwesomeIcon icon={faCaretRight} style={baseStyle} size={"2xl"} />
      </Button>
      <Button class_name="pagination__info" isDisabled={false} doOnClick={()=>{}}>
        <FontAwesomeIcon icon={faForwardFast} style={baseStyle} size={"2xl"} />
      </Button>
    </nav>
  );
}

export default Pagination;