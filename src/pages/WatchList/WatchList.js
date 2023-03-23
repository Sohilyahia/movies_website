import "./WatchList.css";
import { useMovieContext } from "../../components/Context/GlobalContext";
import { WatchListCard } from "../../components/index";

function WatchList() {
  const WatchList_movie = useMovieContext();
  return (
    <>
      {WatchList_movie.watchlist.length > 0 ? (
        <div className="watchlist_results">
          {WatchList_movie.watchlist.map((movie) => (
            <WatchListCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <h2 style={{ textAlign: "center", marginTop: "20px", opacity: ".7" }}>
          NO Movie ADD
        </h2>
      )}
    </>
  );
}

export default WatchList;
