import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestions = ()=>{
    const gemini = useSelector((store)=>store.gpt);
    const shimmer = useSelector((store)=>store.shimmer?.showShimmer)
    // console.log("shimmer",)
    const {movieNames, geminiMovieFromTMDB} = gemini;
    if(shimmer && movieNames==null) return <Shimmer/>;

    return <div className="m-4 bg-opacity-80 bg-black rounded-lg text-white">
        {movieNames && movieNames.map((movie, index)=><MovieList key={movie} title={movie} movies={geminiMovieFromTMDB[index]}/>)}
    </div>
}

export default GptMovieSuggestions;