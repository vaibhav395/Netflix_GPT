import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ()=>{

    //Fetching the movies from the store and taking the first movie to show as video background
    const movies = useSelector(store=>store.movies?.NowPlayingMovies);
    if(!movies) return;
    // 6
    const MainMovie = movies[6];
    const{original_title, overview, id} = MainMovie;
    



    return <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground video_id={id}/>
    </div>
}

export default MainContainer;