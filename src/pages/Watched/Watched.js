import { useMovieContext } from "../../components/Context/GlobalContext";
import { WatchedCard } from "../../components/index";

function Watched() {
  const Watched_Movie = useMovieContext();
  return (
    <>
      {Watched_Movie.watched.length > 0 ? (
        <div className="watchlist_results">
          {Watched_Movie.watched.map((movie) => (
            <WatchedCard key={movie.id} movie={movie} />
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

export default Watched;
