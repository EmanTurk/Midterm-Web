import "./CSS/LoginSignup.css";
import React, { useState } from "react";
import { auth, firestore } from "../firebase/firebase.js"; 

import { Link } from "react-router-dom";


import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const LoginSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user)
      await setDoc(doc(firestore, "users", user.uid), {
        name,
        email
      });

    } catch (error) {
      console.error("Error signing up: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp(); 
  };

  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-signup-fields">
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button  type="submit">Continue</button>
        </form>
        {/* <p className="login-signup-login">
          Already Have An Account? <span>Login Here</span>

        </p> */}

<p className="login-signup-login">
  Already Have An Account? <Link to="/login">Login Here</Link>
</p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;

