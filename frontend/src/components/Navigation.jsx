import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Login</Link>
            <Link to="/Home">Home</Link>
        </nav>
    );
}

export default Navigation;