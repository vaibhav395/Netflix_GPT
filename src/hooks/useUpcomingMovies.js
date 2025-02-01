import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addUpcoming } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcoming = useSelector((store)=>store?.Movies?.upcoming);

    const getUpcomingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_options);
        const json = await data.json();

        dispatch(addUpcoming(json.results));
    }
    useEffect(()=>{
        //Fetched the upcoming movies from the TMDB API, added it to the store and now we can use it.
        !upcoming && getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useUpcomingMovies;