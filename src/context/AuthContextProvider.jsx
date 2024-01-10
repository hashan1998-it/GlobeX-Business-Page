import { AuthContext } from "./AuthContext.jsx";
import { auth } from "../firebase.jsx";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // Google Sign In
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    // Google Sign Out
    const googleSignOut = () => {
        signOut(auth);
    };

    //Set the current user on mounting the components
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
        });
        return unsubscribe;
    }, [user])


    const value = { googleSignIn, user, googleSignOut,loading };


    // You can use following values in your components
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node,
}


export default AuthContextProvider;


