import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);
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
        const { displayName, email, photoURL } = res.user;
        const singInUser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(singInUser);
        return res.user;
      })
      .catch(err => {
        setUser(null);
        return err.message;
      });
  };
  return {
    user,
    singInWithGoogle
  };
};

export default Auth;
