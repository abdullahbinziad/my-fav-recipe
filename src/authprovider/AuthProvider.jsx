import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ( {children}) => {
  const auth = getAuth(app);

  // register with email and pass
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //update user info 
  const userProfile = (name,url)=>{
  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: url
      })
  }

  const authInfo = {
    register,
    userProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
