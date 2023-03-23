import "./WatchListCard.css";
import { FaEye } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useMovieContext } from "../Context/GlobalContext";
import * as actions from "../Context/ActionsTypes";

function WatchListCard({ movie }) {
  const MovieContext = useMovieContext();
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="watchlistcard">
      <div>
        <img src={img_path + movie.poster_path} alt={movie.title} />
      </div>
      <button
        onClick={() =>
          MovieContext.dispatchMovie({
            type: actions.ADD_FROM_WATCHLIST_TO_WATCHED,
            payload: movie,
          })
        }
        className="FaEye_Icon"
      >
        <FaEye />
      </button>
      <button
        onClick={() =>
          MovieContext.dispatchMovie({
            type: actions.REMOVE_FROM_WATCHLIST,
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

export default WatchListCard;
