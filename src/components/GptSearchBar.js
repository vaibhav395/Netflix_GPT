import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import model from "../utils/generativeAi";
import { API_options } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchFromTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchTextSubmit = async () => {
    try {
      console.log(searchText.current.value);

      const prompt =
        "Act as a movie recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        "only give me name of 5 movies, comma sepreated like the example result given ahead. Example result : Gadar, 3 idiots, Phir Hera Pheri, Dhamaal, Dhol";
      const result = await model.generateContent(prompt);
      console.log(result.response.text());

      //Converted the comma seperated string of movies that we searched into an array
      const geminiMoviesName = result.response.text().split(", ");

      //Calling the function to fetch the details of movie from TMDB API, this fxn will be called for each movie.
      //NOTE (IMPORTANT) - async function always return a promise, for map fxn it will return array of promises.
      const data = geminiMoviesName.map((movie) => searchFromTMDB(movie));

      //Now we have to resolve all the promise using promise.all, basically when all the promises get resolved then i will get the result
      //Here we are getting all the movies with the name that gemini gave us.
      //Now we are pushing these movies into our store
      const tmdbResults = await Promise.all(data);

      dispatch(addGeminiMovieResult({ geminiMoviesName, tmdbResults }));
      console.log(tmdbResults);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-44 flex justify-center">
      <form
        className="bg-gray-900 p-6 w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-3 px-2 rounded-lg border border-black col-span-10"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button
          className="bg-red-500 py-3 px-4 mx-3 rounded-md font-semibold text-white col-span-2"
          onClick={handleSearchTextSubmit}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
