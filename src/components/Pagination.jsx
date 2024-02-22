import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardFast,
  faCaretLeft,
  faCaretRight,
  faForwardFast,
} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/extensions
import PropTypes from "prop-types";
// eslint-disable-next-line import/extensions
import Button from "./Button.jsx";

// eslint-disable-next-line react/prop-types
function Pagination({ pagination, setPage }) {
  let firstDisabled = false;
  let previousDisabled = false;
  let nextDisabled = false;
  let lastDisabled = false;
  let current = 1;
  if (pagination === null) {
    firstDisabled = true;
    previousDisabled = true;
    nextDisabled = true;
    lastDisabled = true;
    // eslint-disable-next-line react/prop-types
  } else if (pagination.previous === null) {
    previousDisabled = true;
    current = pagination.current;
    // eslint-disable-next-line react/prop-types
  } else if (pagination.next === null) {
    nextDisabled = true;
    current = pagination.current;
  } else {
    current = pagination.current;
  }
  const disableStyle = { color: "#35466C" };
  const baseStyle = { color: "#6b8cd9" };
  return (
    <nav className="pagination">
      <Button
        className="pagination__info"
        isDisabled={firstDisabled}
        doOnClick={
          firstDisabled
            ? () => {}
            : () => {
                // eslint-disable-next-line react/prop-types
                setPage(pagination.first);
              }
        }
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
        doOnClick={
          previousDisabled
            ? () => {}
            : () => {
                // eslint-disable-next-line react/prop-types
                setPage(pagination.previous);
              }
        }
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
        doOnClick={
          lastDisabled
            ? () => {}
            : () => {
                // eslint-disable-next-line react/prop-types
                setPage(pagination.current);
              }
        }
      >
        {current}
      </Button>
      <Button
        className="pagination__info"
        isDisabled={nextDisabled}
        doOnClick={
          nextDisabled
            ? () => {}
            : () => {
                // eslint-disable-next-line react/prop-types
                setPage(pagination.next);
              }
        }
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
        doOnClick={
          lastDisabled
            ? () => {}
            : () => {
                // eslint-disable-next-line react/prop-types
                setPage(pagination.last);
              }
        }
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
// eslint-disable-next-line react/default-props-match-prop-types
Pagination.defaultProps = { pagination: null, setPage: () => {} };
Pagination.propTypes = {
  pagination: PropTypes.node,
  setPage: PropTypes.func,
};

export default Pagination;
