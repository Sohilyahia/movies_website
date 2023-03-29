import "./WatchedCard.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionsTypes";

function WatchedCard({ movie }) {
  const MovieContext = useMovieContext();
  let img_path = "https://image.tmdb.org/t/p/w300";
  return (
    <div className="watchlistcard">
      <div>
        <img src={img_path + movie.poster_path} alt={movie.title} />
      </div>
      <button
        onClick={() =>
          MovieContext.dispatchMovie({
            type: actions.ADD_FROM_WATCHED_TO_WATCHLIST,
            payload: movie,
          })
        }
        className="FaEye_Icon"
      >
        <FaEyeSlash />
      </button>
      <button
        onClick={() =>
          MovieContext.dispatchMovie({
            type: actions.REMOVE_FROM_WATCHED,
            payload: movie.id,
          })
        }
        className="FaTimes_Icon"
      >
        <FaTimes />
      </button>
    </div>
  );
}

export default WatchedCard;
