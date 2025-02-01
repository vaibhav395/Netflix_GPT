import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addPopular } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popular = useSelector((store)=>store?.Movies?.popular);

    const getPopularMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?&page=1", API_options);
        const json = await data.json();

        dispatch(addPopular(json.results));
    }
    useEffect(()=>{
        //Fetched the popular movies from the TMDB API, added it to the store and now we can use it.
        !popular && getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default usePopularMovies;