import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";

function Register() {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordAgainRef = useRef();
    let navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const url = "https://social-app-backend.vercel.app/api/v1";
        if(passwordRef.current.value !== passwordAgainRef.current.value){
            passwordAgainRef.current.setCustomValidity("Password don't match!")
        } else{
            const user = {
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };

            try{
                await axios.post(`${url}/auth/register`, user);
                navigate("/login", {replace: true});
            } catch(err){
                console.log(err);
            }
        }
    };

    return (
        <div className="signup">
            <div className="signupWrapper">
                <div className="signupLeft">
                    <h3 className="signupLogo">Facebook</h3>
                    <span className="signupDesc">
                        Connect with friends and the world around you on Facebook.
                    </span>
                </div>
                <div className="signupRight">
                    <form onSubmit={submitHandler} className="signupBox">
                        <input 
                            className="signupInput" 
                            type="text" 
                            placeholder="Username" 
                            ref={usernameRef}
                            required
                        />
                        <input 
                            className="signupInput" 
                            type="email" 
                            placeholder="Email" 
                            ref={emailRef}
                            required
                        />
                        <input 
                            className="signupInput" 
                            type="password" 
                            placeholder="Password" 
                            ref={passwordRef}
                            minLength={6}
                            required
                        />
                        <input 
                            className="signupInput" 
                            type="password" 
                            placeholder="Password Again" 
                            ref={passwordAgainRef}
                            minLength={6}
                            required
                        />
                        <button 
                            type="submit"
                            className="signupButton"
                        >
                            Sign Up
                        </button>
                        <Link to="/login" style={{ textDecoration: "none", textAlign:"center" }}>
                            <button className="signupLoginButton">Log into an Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
