import "./ExclamationIcon.css";
import { FaExclamationCircle } from "react-icons/fa";
function ExclamationIcon() {
  return (
    <ul className="ExclamationIcon">
      <li>
        <span className="fa">
          <FaExclamationCircle
            style={{
              color: "black",
              fontSize: "1.75em",
              transition: "0.5s",
              transitionDelay: "0.25s",
            }}
          />
        </span>
        <span className="tit">show details</span>
      </li>
    </ul>
  );
}
export function ExclamationIconCrous() {
  return (
    <ul className="ExclamationIcon ExclamationIcon_TomCrous">
      <li>
        <span className="fa">
          <FaExclamationCircle
            style={{
              color: "black",
              fontSize: "1.75em",
              transition: "0.5s",
              transitionDelay: "0.25s",
            }}
          />
        </span>
        <span className="tit">show details</span>
      </li>
    </ul>
  );
}
export function ExclamationIconWillFerrell() {
  return (
    <ul className="ExclamationIcon ExclamationIcon_WillFerrell">
      <li>
        <span className="fa">
          <FaExclamationCircle
            style={{
              color: "black",
              fontSize: "1.75em",
              transition: "0.5s",
              transitionDelay: "0.25s",
            }}
          />
        </span>
        <span className="tit">show details</span>
      </li>
    </ul>
  );
}

export default ExclamationIcon;
