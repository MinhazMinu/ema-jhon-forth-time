import React from "react";
import "./Login.css";
import Auth from "./useAuth";

const Login = () => {
  const auth = Auth();
  const handleSignIn = () => {
    auth.singInWithGoogle().then(res => {
      window.location.pathname = "review";
    });
  };
  const handleSignOut = () => {
    auth.signOut().then(res => {
      window.location.pathname = "/";
    });
  };
  return (
    <div>
      {auth.user ? (
        <button className="btn btn-xm btn-danger" onClick={handleSignOut}>
          SignOut
        </button>
      ) : (
        <button className="btn btn-sm btn-success" onClick={handleSignIn}>
          SignIn with Google
        </button>
      )}
    </div>
  );
};

export default Login;
