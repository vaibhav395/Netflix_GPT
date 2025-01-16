import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  const popular = useSelector((store)=>store.movies?.popular);
  const topRated = useSelector((store)=>store.movies?.toprated);
  const upcoming = useSelector((store)=>store.movies?.upcoming);

  return (
    <div className="bg-black">
      <div className="-mt-48 relative z-10 pl-12">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Popular"} movies={popular} />
        <MovieList title={"Top Rated"} movies={topRated} />
        <MovieList title={"Upcoming"} movies={upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
