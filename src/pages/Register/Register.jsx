import "./Register.css";

function Register() {
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
                    <div className="signupBox">
                        <input className="signupInput" type="text" placeholder="Username" />
                        <input className="signupInput" type="email" placeholder="Email" />
                        <input className="signupInput" type="password" placeholder="Password" />
                        <input className="signupInput" type="password" placeholder="Password Again" />
                        <button className="signupButton">Sign Up</button>
                        <button className="signupLoginButton">Log into an Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
