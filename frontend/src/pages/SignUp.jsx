import { Link } from "react-router-dom";

import SignUp from "../components/SignUp";

function Splash() {
    return (
        <div className="splash">
            <div className="splash-card">
                <h1 className="splash-title">Create Account</h1>

                <SignUp />

                <Link to="/" className="btn">Login</Link>
            </div>
        </div>
    );
}

export default Splash;