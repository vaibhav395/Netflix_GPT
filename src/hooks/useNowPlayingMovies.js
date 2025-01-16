import { useDispatch } from "react-redux";
import { API_options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();

    const getNowPlayingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_options);
        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
        getNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useNowPlayingMovies;