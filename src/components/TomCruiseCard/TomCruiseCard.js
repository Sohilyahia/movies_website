import "./TomCruiseCard.css";
import { PlusIconTomCrous } from "../Plusicon/PlusIcon";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionsTypes";
import { ExclamationIconCrous } from "../ExclamationIcon/ExclamationIcon";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Button,
} from "react-bootstrap";
let img_path = "https://image.tmdb.org/t/p/w300";

function TomCruiseCard({ rated }) {
  const MovieContext = useMovieContext();
  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);
  return (
    <div className="rated_movie" key={rated.id}>
      <div className="rated_img">
        <img src={img_path + rated.poster_path} alt={rated.title} />
      </div>
      <div className="rated_info">
        <h3>{rated.title}</h3>
        <span>{rated.release_date}</span>
      </div>
      <button
        onClick={() =>
          MovieContext.dispatchMovie({
            type: actions.ADD_TO_WATCHLIST,
            payload: rated,
          })
        }
        className="FaPlusCircle FaPlusCircle_TomCrous"
        disabled={
          MovieContext.watchlist.find((o) => o.id === rated.id) ? true : false
        }
      >
        <PlusIconTomCrous />
      </button>
      <button
        className="ExclamationIcon ExclamationIcon_TomCrous"
        onClick={handelShow}
      >
        <ExclamationIconCrous />
      </button>
      <Modal
        show={show}
        onHide={handelClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <ModalTitle>
            <h3>{rated.title}</h3>
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="model_popup">
            <div>
              {rated.poster_path ? (
                <img src={img_path + rated.poster_path} alt={rated.title} />
              ) : (
                <div></div>
              )}
            </div>

            <div className="model_popup_info">
              <h3>{rated.title}</h3>
              <h6>
                IMDB :
                <FaStar style={{ color: "yellow", marginBottom: "2px" }} />
                {rated.vote_average}
              </h6>
              <h6>release date : {rated.release_date}</h6>
            </div>
          </div>
          <h5 className="overview">Overview</h5>
          <h5 style={{ fontWeight: "lighter" }}>{rated.overview}</h5>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handelClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TomCruiseCard;
