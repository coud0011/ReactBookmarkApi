import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardFast,
  faCaretLeft,
  faCaretRight,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/extensions
import Button from "./Button.jsx";

// eslint-disable-next-line react/prop-types
function Pagination({ pagination }) {
  let firstDisabled = false;
  let previousDisabled = false;
  let nextDisabled = false;
  let lastDisabled = false;
  if (pagination === null) {
    firstDisabled = true;
    previousDisabled = true;
    nextDisabled = true;
    lastDisabled = true;
    // eslint-disable-next-line react/prop-types
  } else if (pagination.previous === null) {
    previousDisabled = true;
    // eslint-disable-next-line react/prop-types
  } else if (pagination.next === null) {
    nextDisabled = true;
  }
  // eslint-disable-next-line no-console
  console.error(
    pagination,
    firstDisabled,
    previousDisabled,
    nextDisabled,
    lastDisabled,
  );
  const disableStyle = { color: "#35466C" };
  const baseStyle = { color: "#6b8cd9" };
  return (
    <nav className="pagination">
      <Button
        className="pagination__info"
        isDisabled={firstDisabled}
        doOnClick={firstDisabled ? () => {} : () => {}}
      >
        <FontAwesomeIcon
          icon={faBackwardFast}
          style={!firstDisabled ? baseStyle : disableStyle}
          size="2xl"
        />
      </Button>
      <Button
        className="pagination__info"
        isDisabled={previousDisabled}
        doOnClick={previousDisabled ? () => {} : () => {}}
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          style={!previousDisabled ? baseStyle : disableStyle}
          size="2xl"
        />
      </Button>
      <Button
        className="pagination__info"
        isDisabled={false}
        doOnClick={() => {}}
      >
        1
      </Button>
      <Button
        className="pagination__info"
        isDisabled={nextDisabled}
        doOnClick={nextDisabled ? () => {} : () => {}}
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          style={!nextDisabled ? baseStyle : disableStyle}
          size="2xl"
        />
      </Button>
      <Button
        className="pagination__info"
        isDisabled={lastDisabled}
        doOnClick={lastDisabled ? () => {} : () => {}}
      >
        <FontAwesomeIcon
          icon={faForwardFast}
          style={!lastDisabled ? baseStyle : disableStyle}
          size="2xl"
        />
      </Button>
    </nav>
  );
}

export default Pagination;
