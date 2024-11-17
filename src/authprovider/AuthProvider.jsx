/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
    console.log(user?.email)
    const createNewUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email ,password)
    }

    const loginUser = async (email,password) =>{
        return await signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const contextData = {
        user,
        setUser,
        createNewUser,
        loginUser,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;