import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const top_rated = useSelector((store)=>store?.Movies?.toprated);

    const getTopRatedMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?&page=1", API_options);
        const json = await data.json();

        dispatch(addTopRated(json.results));
    }
    useEffect(()=>{
        //Fetched the top rated movies from the TMDB API, added it to the store and now we can use it.
        !top_rated && getTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useTopRatedMovies;