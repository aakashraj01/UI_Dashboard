import React from "react";
import "./register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  provider,
  signInWithPopup,
} from "../../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="board">
        <h1>Board.</h1>
      </div>
      <div className="form">
        <div className="form_whole_cotainer">
          <section>
            <h2>Register</h2>
            <span>Register your account</span>
          </section>
          <section className="auth_methods">
            <button className="diff_auth" onClick={handleGoogleLogin}>
              <div className="auth_capsule">
                <img
                  className="auth_method_img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT172r2ETQEFs21g1jy6zVj07YctGghp7DWH152A2E&s"
                  alt="google img"
                />
                <span>Sign in with Google</span>
              </div>
            </button>
            <button className="diff_auth">
              <div className="auth_capsule">
                <img
                  className="auth_method_img"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EADoQAAIBAwEDBwkGBwAAAAAAAAABAgMEEQUGIVESIjFBgZHREyNCUmFxobHBFBUkY3LhMjRDU5Kisv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAFe1"
                  alt="apple img"
                />
                <span>Sign in with Apple</span>
              </div>
            </button>
          </section>
          <form className="form_container" onSubmit={handleSignup}>
            <div className="form-field">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="/forgetbutton" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit">Register</button>
          </form>
          <section className="register_link">
            <Link to="/signIn">Already have an account</Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;
