import React, { useState, useEffect } from "react";
import EpubReader from "../components/EpubReader";
import { signUp, signIn } from '../auth';
import { auth } from '../firebase'; // Import auth from firebase.js
import { onAuthStateChanged } from "firebase/auth";

const IndexPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // Check user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("Sign-up successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
      alert("Sign-in successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      {!user ? (
        <div>
          <h1>Login</h1>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      ) : (
        <EpubReader epubUrl="/Tarzan.epub" />
      )}
    </div>
  );
};

export default IndexPage;
