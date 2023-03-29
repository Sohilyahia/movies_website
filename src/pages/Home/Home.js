import * as React from "react";
import { HighestRated, TvShow } from "../../sections";
import "./Home.css";

// lazy  should exported as default from original component
const PopularMovies = React.lazy(() =>
  import("../../sections/HomeSections/PopularMovies/PopularMovies.js")
);
const Kids = React.lazy(() =>
  import("../../sections/HomeSections/Kids/Kids.js")
);
const TomCruise = React.lazy(() =>
  import("../../sections/HomeSections/TomCruise/TomCruise.js")
);

function Home() {
  return (
    <div>
      <HighestRated />
      <TvShow />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Kids />
        <PopularMovies />
        <TomCruise />
      </React.Suspense>
    </div>
  );
}

export default Home;
