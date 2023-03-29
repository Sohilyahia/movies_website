import "./PlusIcon.css";
import { FaPlusCircle } from "react-icons/fa";

function PlusIcon() {
  return (
    <ul className="FaPlusCircle">
      <li>
        <span className="fa">
          <FaPlusCircle
            style={{
              color: "black",
              fontSize: "1.75em",
              transition: "0.5s",
              transitionDelay: "0.25s",
            }}
          />
        </span>
        <span className="tit">add to watchlist</span>
      </li>
    </ul>
  );
}
export function PlusIconTomCrous() {
  return (
    <ul className="FaPlusCircle FaPlusCircle_TomCrous">
      <li>
        <span className="fa">
          <FaPlusCircle
            style={{
              color: "black",
              fontSize: "1.75em",
              transition: "0.5s",
              transitionDelay: "0.25s",
            }}
          />
        </span>
        <span className="tit">add to watchlist</span>
      </li>
    </ul>
  );
}
export function PlusIconWillFerrell() {
  return (
    <ul className="FaPlusCircle FaPlusCircle_WillFerrell">
      <li>
        <span className="fa">
          <FaPlusCircle
            style={{
              color: "black",
              fontSize: "1.75em",
              transition: "0.5s",
              transitionDelay: "0.25s",
            }}
          />
        </span>
        <span className="tit">add to watchlist</span>
      </li>
    </ul>
  );
}

export default PlusIcon;
