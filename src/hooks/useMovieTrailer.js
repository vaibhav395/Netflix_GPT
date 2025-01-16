/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";


//Basically this hook fetches videos based on this movie_id, filtering those for trailers and putting it up to store
const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();

  //Fetching the trailer video and updating the store with it
  const getMainMovieTrailer = async () => {
    //This is the API that will give video trailer based on movie id
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",
      API_options
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (videos) => videos.type === "Trailer"
    );

    //Handled the case if movie has no trailer, like if no trailer we take what api gives as like it can be teaser, featurrate etc
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    //We have added trailer to redux store, and fetched data from redux store to display trailer
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMainMovieTrailer();
  }, []);
};

export default useMovieTrailer;
