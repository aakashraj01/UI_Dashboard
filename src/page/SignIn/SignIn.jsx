import React from "react";
import "./SignIn.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  provider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "../../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      //   console.log("User logged in:", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      //   console.log("User logged in:", userCredential.user);
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
            <h2>Sign In</h2>
            <span>Sign in to your account</span>
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
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EADoQAAIBAwEDBwkGBwAAAAAAAAABAgMEEQUGIVESIjFBgZHREyNCUmFxobHBFBUkY3LhMjRDU5Kisv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAFe1baehaylSs4qvVW5yzzIv6mrtbrEoN6fayaePPST/18SqASstc1O7uIJ3M4cqaShS5q6e86Ajnuzdo7vV6CxmFJ+Um+GOj44OhgAAAAAAAAAAAAAAAwpJvCaYGTxvK6tbWtXl0U4OWOOEexoa5Rq3OlXFG3jyqk44iuO9Ac6q1J1qs6tR5nOTlJ8WzEISqTjCnFynJ4jFLLbJq32X1KrJeVjChHrc5J/BFn0jQ7XTOfBOpXa31ZLf2cAPnZ7Svuy085vr1N9Rrq4LsJY8pV6MW1KrTT4OSPuMozWYtNcU8gfQAAAAAAAAAYHzOcYRcpyUYpZbbwkirartVhulpqUvzprd2LxNTanWJXVaVnbyxQpvE2vTl4Ir4GxdX11dvNxcVKnsct3d0Gum08ptPigAJKz13UbTdG4dSHqVecvH4k9abX28o4urepCXGm1JfQp4Atd7tckuTY2zb9es/ovEgbzVb69b8vczcX6EXyY9yNIAYwuB90qtSjNTo1J05LrhLDPkAT+m7UXVvKMLz8RS49E129faXCzuqN5QjWt5qcJda6vYzmBZtjra+jXdeHMs5LEuV6b9niBcAAAAAAjtevXYaXWqweKjXIp/qfh09hIlV25rNQtKCe5uU2vdhL5sCpgAAAAAAAAAAAAJXZ7S/vO8xUT+z0sOo+PBdpf4QjCEYwioxisJLoSIrZW2Vvo9KWOdWzUk/f0fDBLgAAAAAApu3H87bL8p/MuRUNuYYr2lTqlGUe5rxArAAAAAAAAAAAAADpekY+67PHR5CH/KNsh9lblXGj0o559HNOS93R8MEwAAAAAACv7aUHU0yFVLLpVFn3Pd4FgNbUrZXlhXt3/Ug0nwfV8QOZANOMnGSxJPDXBgAAAAAAAAAAAJTZ7VXpl55xvyFTm1Fw4PsOgU5xqQjOElKMllNPc0crJXRtcuNMap48rb/22+j3PqA6CDxs7iN3a0riEZRjUipJS6cHsAAAAAAUPauxdpqcqsVilcc9fq9JfXtIU6LrmnLUrCdFY8qudTlwl+5zucZQm4Ti4yi8NPpTAwAAAAAAAAAABs6baSvr6jbR9OXOfBdb7jWLpshpjtrd3laPnay5ifow/fp7gLBTjGEIwikoxWEl1I+gAAAAAAAVba3R+XnULaO9Lz0V1r1vEtJhrIHKgWvWdl3Ocq+mKKzvdFvH+PgQP3RqPK5P2Kvn9AGkCfsdlbys07qUbeHD+KXct3xJ232Y0ylFculOtLjOb+SwgKGC/wBXZvSqkcfZnB8YzkvqQ1/slVhmVjWVSPqVNz7+j5AVkG/PRdThLkuyrZ9iyu9Ejpuy11WnGd95il1xynN+AGvs3pD1G5VWrH8NSeZZ9N+r4l9WEsJYR521vStaMKNCChTgsKKPUAAAAAAAAAAAMdRkADBkAAAAMGQAAAAAAAAAP//Z"
                  alt="apple img"
                />
                <span>Sign in with Apple</span>
              </div>
            </button>
          </section>
          <form className="form_container" onSubmit={handleSignIn}>
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
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" onSubmit={handleSignIn}>
              Sign In
            </button>
          </form>
          <section className="register_link">
            <h3>Don’t have an account?
            <Link to="/signup"> Register here </Link>
            </h3>
          </section>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
