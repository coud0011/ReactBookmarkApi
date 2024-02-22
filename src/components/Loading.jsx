import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Loading() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <span>Loading </span>
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse
        style={{ color: "#6b8cd9" }}
      />
    </div>
  );
}

export default Loading;
