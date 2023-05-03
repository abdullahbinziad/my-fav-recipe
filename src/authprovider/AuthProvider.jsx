import { createContext, useEffect, useState } from "react";
import { getAuth,signInWithPopup, createUserWithEmailAndPassword,updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ( {children}) => {
    const[loading,setLoading] = useState(true)
const [user,setUser] = useState(null);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

  // register with email and pass
  const registerByEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
    //login woth firebase
    const loginByEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };


  //update user info 
  const userProfile = (name,url)=>{
    setLoading(true)
  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: url
      })
  }
  //signinWith Google 
  const signinWithGoogle=()=>{
    setLoading(true)
  return  signInWithPopup(auth, googleProvider)
  }
  //signinWith Github 
  const signinWithGithub=()=>{
    setLoading(true)
  return  signInWithPopup(auth, githubProvider)
  }

  // onauthstate
useEffect(()=>{
 const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser)
    setLoading(false)
   });

    return ()=> {
        unsubscribe()
    }
},[])

//signout auth
const logout =()=>{
    return  signOut(auth);
  }

  //share the data 
  const authInfo = {
    user,
    loginByEmailPassword,
    registerByEmailPassword,
    userProfile,
    signinWithGoogle,
    signinWithGithub,
    loading,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
