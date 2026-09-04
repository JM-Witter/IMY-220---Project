
import { Link } from "react-router-dom";

import Login from "../components/Login";

function Splash() {
    return (
        <div className="splash">
            <div className="splash-card">
                <div className="logo">

                </div>

                <h1 className="splash-title">TidBit</h1>

                <Login />

                <Link
                    to="/SignUp" className="btn">Create Account</Link>
            </div>
        </div>
    );
}

export default Splash;