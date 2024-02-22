import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope,react/style-prop-object
    <div>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <span style={{ fontSize: 30 }}>Loading </span>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse
        style={{ color: "#6b8cd9" }}
        size="2xl"
      />
    </div>
  );
}

export default Loading;
