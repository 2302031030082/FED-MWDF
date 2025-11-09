import React, { useState } from "react";
import { signInWithGoogle, logout, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import JsonServerCRUD from "./JsonServerCRUD";


export default function FirebaseAuthCRUD() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

  return (
    <div className="card">
      {user ? (
        <>
          <h3>Welcome, {user.displayName}</h3>
          <button onClick={logout}>Logout</button>
          <JsonServerCRUD />
        </>
      ) : (
        <>
          <h2>Firebase Google Auth</h2>
          <button onClick={signInWithGoogle}>Sign In with Google</button>
        </>
      )}
    </div>
  );
}
