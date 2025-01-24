import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { chooseLanguage } from "../utils/consfigSlice";



const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store=>store.user);
    const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
    const dispatch = useDispatch();

    const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e)=>{
      dispatch(chooseLanguage(e.target.value));
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid: uid, email: email, name: displayName, photoUrl: photoURL }));

          //Whenever the user is signed in, or whenever the user is there, redirect to browse page.
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());

          //whenever the user is not there, redirect him to login page.
          navigate("/");
        }
      });

      //Good Practice
      return ()=>unsubscribe();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // navigate("/")
          }).catch((error) => {
            navigate("/error");
          });
          
    }
  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={logo}
        alt="logo"
      />
      {user && <div className="flex p-4 mr-3">
        {showGptSearch && <select className="p-2 bg-gray-800 text-white rounded-md m-2" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button onClick={handleGptSearchClick} className="bg-red-500 px-2 m-2 rounded-md font-semibold text-white ">{showGptSearch?"Home":"GPT Search"}</button>
        <button onClick={handleSignOut} className=" bg-red-500 px-2 m-2 rounded-md font-semibold text-white">Sign Out</button>
        <img
          className="w-12 h-12 rounded-md"
          alt="usericon"
          src={user?.photoUrl}
        />
      </div>}
    </div>
  );
};

export default Header;
