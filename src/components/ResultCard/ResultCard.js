import "./ResultCard.css";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionsTypes";
import { FaStar } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function ResultCard({ movie }) {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const MovieContext = useMovieContext();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  // controled button
  // check if the movie already added by find the id
  const stored_Movie_Watchlist = MovieContext.watchlist.find(
    (m) => m.id === movie.id
  );
  const stored_Movie_watched = MovieContext.watched.find(
    (m) => m.id === movie.id
  );

  // check if the movie already add in the watched or not by find the id
  let watchlistDisabled = stored_Movie_Watchlist
    ? true
    : stored_Movie_watched
    ? true
    : false;
  let watchedDisabled = stored_Movie_watched ? true : false;

  return (
    <div className="result-card">
      <div className="card-img">
        {movie.poster_path ? (
          <img src={img_path + movie.poster_path} alt={movie.title} />
        ) : (
          <div></div>
        )}
      </div>
      <div className="card-info">
        <h3>{movie.title}</h3>
        {movie.release_date ? <h4>{movie.release_date}</h4> : "-"}
      </div>
      <div className="controls">
        {<h3 className="controls-title">{movie.title}</h3>}
        <button
          onClick={() =>
            MovieContext.dispatchMovie({
              type: actions.ADD_TO_WATCHLIST,
              payload: movie,
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
              payload: movie,
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
              <h3>{movie.title}</h3>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="model_popup">
              <div>
                {movie.poster_path ? (
                  <img
                   
                    src={img_path + movie.poster_path}
                    alt={movie.title}
                  />
                ) : (
                  <div></div>
                )}
              </div>

              <div className="model_popup_info">
                <h3>{movie.title}</h3>
                <h6>
                  IMDB :{" "}
                  <FaStar style={{ color: "yellow", marginBottom: "2px" }} />{" "}
                  {movie.vote_average}
                </h6>
                <h6>release date : {movie.release_date}</h6>
              </div>
            </div>
            <h5 className="overview">Overview</h5>
            <h5 style={{ fontWeight: "lighter" }}>{movie.overview}</h5>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      
   
  );
}

export default ResultCard;
