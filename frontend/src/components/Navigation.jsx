import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navigation({searchbar = false}) {
  return (
    <nav>
      <div className="nav-brand">
        <Link to="/Home">TidBit</Link>
      </div>

      <SearchBar visible={searchbar} />

      <div className="nav-links">
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/Account" className="nav-link">Account</Link>
      </div>
    </nav>
  );
}

export default Navigation;