import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);
// Auth function
const Auth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  //   inner function singInWithGoogle
  const singInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        console.log(res);
        return res.user;
      })
      .catch(err => {
        console.log(err);

        return err.message;
      });
  };
  return {
    singInWithGoogle
  };
};

export default Auth;
