/* eslint-disable react-hooks/exhaustive-deps */

import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ video_id }) => {
  //This custom hook is responsible for fetching the movie trailer and putting (add to redux store) it up on the background.
  useMovieTrailer(video_id);


  //As we had put that trailer in the store, now we are fetching the trailer from the redux store.
  const trailerVideo = useSelector((store) => store.movies?.trailer);

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        //This key is used to fetch the video from youtube and display on to our app
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
