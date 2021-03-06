import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import React, { useState, createContext, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const getUser = user => {
  const { displayName, email, photoURL } = user;
  return {
    name: displayName,
    email: email,
    photo: photoURL
  };
};

const AuthContext = createContext();
// create context provider function
export const AuthContextProvider = props => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children} </AuthContext.Provider>
  );
};

// create context Consume function
export const UseAuth = () => useContext(AuthContext);
//  private public route setup

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = UseAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

// Auth function
const Auth = () => {
  const [user, setUser] = useState(null);
  //   inner function singInWithGoogle
  const singInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        const singInUser = getUser(res.user);
        setUser(singInUser);
        return res.user;
      })
      .catch(err => {
        setUser(null);
        return err.message;
      });
  };
  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(function() {
        setUser(null);
        return true;
      })
      .catch(function(error) {
        // An error happened.
        return false;
      });
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(usr) {
      if (usr) {
        const currUser = getUser(usr);
        setUser(currUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return {
    user,
    signOut,
    singInWithGoogle
  };
};

export default Auth;
