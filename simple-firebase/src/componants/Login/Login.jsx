// import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();
    const handelGoogleSinghIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const logInuser = result.user;
                console.log(logInuser);
                setUser(logInuser);

            })
            .catch(error => {
                console.log("error", error.message);
            })
    }
    const handelGoogleSinghOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {user ?
                <button onClick={handelGoogleSinghOut}>GOOGle LOgOut</button>:
                <button onClick={handelGoogleSinghIn}>GOOGle LOgin</button> }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <h2>Email: {user.email}</h2>
            </div>}

        </div>
    );
};

export default Login;