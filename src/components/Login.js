import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const Password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    //Validate the form data
    const message = checkValidData(email.current.value, Password.current.value);
    setErrMessage(message);

    if (message) return; //if email and password is not valid as per regex, then do not go further

    //Now we can proceed sign in / sign up after validation.
    if (!isSignInForm) {
      // This means we are on Sign Up page and hence will write logic for Sign Up the user using email id and password
      createUserWithEmailAndPassword(auth, email.current.value, Password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode+"-"+errorMessage);
        });
    }
    else
    {
      // Now this is the logic if we are on Sign In page, that means user is already registered on firebase
      signInWithEmailAndPassword(auth, email.current.value, Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+"-"+errorMessage);
  });
    }
  };
  return (
    <div className="h-full w-full">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-16 ml-[530px] my-40 rounded-md w-3/12 bg-opacity-85"
      >
        <h2 className="text-white text-3xl my-4 font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-5 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 mb-5 w-full bg-gray-700"
        />
        <input
          ref={Password}
          type="password"
          placeholder="Password"
          className="p-3 w-full bg-gray-700"
        />
        <p className="text-red-600 mt-2 font-semibold ">{errMessage}</p>
        <button
          className="text-white font-semibold bg-red-500 rounded-md w-full p-3 mt-8"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white p-5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
