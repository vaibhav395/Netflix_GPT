import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="h-full w-full">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form className="absolute bg-black p-16 ml-[530px] my-40 rounded-md w-3/12 bg-opacity-85">
        <h2 className="text-white text-3xl my-4 font-semibold">{isSignInForm? "Sign In" : "Sign Up"}</h2>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-3 mb-5 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 mb-5 w-full bg-gray-700"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-3 w-full bg-gray-700"
        />
        <button className="text-white font-semibold bg-red-500 rounded-md w-full p-3 mt-8">
        {isSignInForm? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white p-5 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
