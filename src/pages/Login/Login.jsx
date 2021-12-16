import "./Login.css";

import { Link } from "react-router-dom";
import { useRef } from "react";

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        console.log(13, emailRef.current.value);
        console.log(14, passwordRef.current.value);
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
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" style={{ textDecoration: "none", textAlign:"center" }}>
                            <button className="loginRegisterButton">Create a New Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
