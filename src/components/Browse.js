import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePolpularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const GptSearch = useSelector((store) => store?.gpt?.showGptSearch);

  //This custom hook is responsible for fetching the list of now playing movies from TMDB API, and adding the movies to the redux store
  useNowPlayingMovies();

  //This custom hook is responsible for fetching the list of popular movies from TMDB API, and adding the movies to the redux store
  usePopularMovies();

  //This custom hook is responsible for fetching the list of top rated movies from TMDB API, and adding the movies to the redux store
  useTopRatedMovies();

  //This custom hook is responsible for fetching the list of upcoming movies from TMDB API, and adding the movies to the redux store
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {GptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
