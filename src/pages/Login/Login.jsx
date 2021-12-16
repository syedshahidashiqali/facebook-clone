import "./Login.css";

import { Link } from "react-router-dom";

function Login() {
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
                    <div className="loginBox">
                        <input className="loginInput" type="email" placeholder="Email" />
                        <input className="loginInput" type="password" placeholder="Password" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" style={{ textDecoration: "none", textAlign:"center" }}>
                            <button className="loginRegisterButton">Create a New Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
