import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = ()=>{
    //This custom hook is responsible for fetching the list of popular movies from TMDB API, and adding the movies to the redux store
    useNowPlayingMovies();
    
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;