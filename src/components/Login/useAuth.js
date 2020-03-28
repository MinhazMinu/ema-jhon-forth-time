import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import React, { useState, createContext, useContext, useEffect } from "react";

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

// Auth function
const Auth = () => {
  const [user, setUser] = useState(null);
  //   inner function singInWithGoogle
  const singInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
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
    firebase
      .auth()
      .signOut()
      .then(function() {
        setUser(null);
      })
      .catch(function(error) {
        // An error happened.
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
