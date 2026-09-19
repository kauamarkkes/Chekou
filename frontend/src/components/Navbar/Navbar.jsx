import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          Meu Site
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Login</Link>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;