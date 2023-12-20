import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase"; 
import { Link,useNavigate } from "react-router-dom"; 
import "../../Pages/CSS/LoginSignUp.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate()
  const handleLogin = async () => {
    try {
     const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(user)
        await setUser(user.user)
        navigate("/")
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="loginsignup">
      <div className="login-signup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="login-signup-fields">
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
        <p className="login-signup-login">
          Don't have an account? <Link to="/register" style={{ color: 'red' }}>Sign Up Here</Link>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
