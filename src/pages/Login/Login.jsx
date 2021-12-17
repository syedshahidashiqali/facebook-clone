import "./Login.css";

import { Link } from "react-router-dom";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material"


function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    const submitHandler = e => {
        e.preventDefault();
        loginCall({email: emailRef.current.value, password:passwordRef.current.value},dispatch);
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Facebook</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Facebook.
                    </span>
                </div>
                <div className="loginRight">
                    <form onSubmit={submitHandler} className="loginBox">
                        <input 
                            className="loginInput" 
                            type="email" 
                            placeholder="Email"
                            required 
                            ref={emailRef}
                        />
                        <input 
                            className="loginInput" 
                            type="password" 
                            placeholder="Password" 
                            required 
                            ref={passwordRef}
                            minLength={6}
                        />
                        <button disabled={isFetching} className="loginButton">{isFetching ? <CircularProgress color="inherit" /> : "Log In"}</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" style={{ textDecoration: "none", textAlign:"center" }}>
                            <button disabled={isFetching} className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit" /> : "Create a New Account"}</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
