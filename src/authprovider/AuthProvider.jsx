import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword  } from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ( {children}) => {
const [user,setUser] = useState(null);


  const auth = getAuth(app);

  // register with email and pass
  const registerByEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
    //login woth firebase
    const loginByEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


  //update user info 
  const userProfile = (name,url)=>{
  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: url
      })
  }

  // onauthstate
useEffect(()=>{
 const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
    setUser(currentUser)
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
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
