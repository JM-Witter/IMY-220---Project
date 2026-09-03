import { Link } from "react-router-dom";

function Navigation({searchbar = false}) {
  return (
    <nav>
      <div className="nav-brand">
        <Link to="/Home">TidBit</Link>
      </div>

      {searchbar && (<div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>)}

      <div className="nav-links">
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/Profile" className="nav-link">Profile</Link>
      </div>
    </nav>
  );
}

export default Navigation;