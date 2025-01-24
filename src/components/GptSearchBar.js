import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const language = useSelector((store)=>store?.config?.lang);
    console.log(language);
  return (
    <div className="pt-44 flex justify-center">
      <form className="bg-gray-900 p-6 w-1/2 grid grid-cols-12">
        <input
          className="py-3 px-2 rounded-lg border border-black col-span-10"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="bg-red-500 py-3 px-4 mx-3 rounded-md font-semibold text-white col-span-2">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
