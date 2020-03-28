import React from "react";
import "./Login.css";
import Auth from "./useAuth";

const Login = () => {
  const auth = Auth();
  return (
    <div>
      {auth.user ? (
        <button className="btn btn-xm btn-danger" onClick={auth.signOut}>
          SignOut
        </button>
      ) : (
        <button
          className="btn btn-sm btn-success"
          onClick={auth.singInWithGoogle}
        >
          SignIn with Google
        </button>
      )}
    </div>
  );
};

export default Login;
