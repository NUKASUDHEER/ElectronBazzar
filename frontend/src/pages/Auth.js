import React, { useState } from "react";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";

const Auth = () => {
  const [showSignUp, setshowSignUp] = useState(false);

  const onSignUpClickHandler = () => setshowSignUp(true);

  return (
    <div>
      {!showSignUp && <Login onSignUpClick={onSignUpClickHandler} />}
      {showSignUp && <SignUp />}
    </div>
  );
};

export default Auth;
