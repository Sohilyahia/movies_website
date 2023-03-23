import { useState } from "react";
import "./PopularMovieCard.css";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionsTypes";

function PopularMovieCard({ info }) {
  // Context API
  const MovieContext = useMovieContext();

  // controled button
  // check if the movie already added by find the id
  const stored_Movie_Watchlist = MovieContext.watchlist.find(
    (o) => o.id === info.id
  );
  const stored_Movie_watched = MovieContext.watched.find(
    (o) => o.id === info.id
  );

  // check if the movie already add in the watched or not by find the id
  let watchlistDisabled = stored_Movie_Watchlist
    ? true
    : stored_Movie_watched
    ? true
    : false;
  let watchedDisabled = stored_Movie_watched ? true : false;

  // for Modal popup
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="popular-card">
        <div className="popular-img">
          {info.poster_path ? (
            <img src={img_path + info.poster_path} alt={info.title} />
          ) : (
            <div></div>
          )}
        </div>
        <div className="popular-info">
          <h3>{info.title}</h3>
          {info.release_date ? <h4>{info.release_date}</h4> : "-"}
        </div>
        <div className="controls">
          {<h3 className="controls-title">{info.title}</h3>}
          <button
            onClick={() =>
              MovieContext.dispatchMovie({
                type: actions.ADD_TO_WATCHLIST,
                payload: info,
              })
            }
            className="btn"
            disabled={watchlistDisabled}
          >
            Add to WatchList
          </button>

          <button
            onClick={() =>
              MovieContext.dispatchMovie({
                type: actions.ADD_TO_WATCHED,
                payload: info,
              })
            }
            className="btn"
            disabled={watchedDisabled}
          >
            Add to Watched
          </button>

          <Button variant="primary" onClick={handleShow}>
            View Details
          </Button>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h3>{info.title}</h3>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="model_popup">
              <div>
                {info.poster_path ? (
                  <img src={img_path + info.poster_path} alt={info.title} />
                ) : (
                  <div></div>
                )}
              </div>

              <div className="model_popup_info">
                <h3>{info.title}</h3>
                <h6>
                  IMDB :{" "}
                  <FaStar style={{ color: "yellow", marginBottom: "2px" }} />{" "}
                  {info.vote_average}
                </h6>
                <h6>release date : {info.release_date}</h6>
              </div>
            </div>
            <h5 className="overview">Overview</h5>
            <h5 style={{ fontWeight: "lighter" }}>{info.overview}</h5>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default PopularMovieCard;
