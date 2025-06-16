import classes from "./SignUp.module.css";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import React, { useState, useContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
// import { type } from "os";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate()
  const navStateData = useLocation()

  console.log(navStateData);
  console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name === "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log("signin",userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect ||'/');
        })
        .catch((error) => {
          // console.log(error.message);
          setError(error.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });

      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log("signup", userInfo);

          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate(navStateData?.state?.redirect || "/");

        })
        .catch((error) => {
          // console.log(error.message);
          setError(error.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG3.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className={classes.login__container}>
        <h1>Sign in</h1>

        {
          navStateData?.state?.msg && (
            <small style={{
              padding: '5px',
              textAlign: 'center',
              color: 'red',
              fontWeight: 'bold',
            }}>
              {navStateData?.state?.msg}


            </small>
          )
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="button"
            name="signin"
            onClick={authHandler}
            className={classes.login__signInButton}
          >
            {loading.signIn ? <ClipLoader color="#000" size={15} /> : "Sign In"}
          
          </button>
        </form>
        <p>
          By signing in, you agree to the AMAZONE FAKE CLONE Conditions of Use.
          Please see our Privacy Notice, Cookies Notice, and Interest-Based Ads
          Notice.
        </p>

        <button
          type="button"
          name="signup"
          onClick={authHandler}
          className={classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            " Create your Amazon Account"
          )}
        </button>
        {/* {error && <small>{error}</small>} */}
        {error && (
          <small style={{ color: "red", fontWeight: "bold" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
