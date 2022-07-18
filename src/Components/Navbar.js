import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="nav-bar"
      aria-label="navagation menu"
      style={{ borderBottom: "4px solid #83e2ff" }}
    >
      <Link
        to="/"
        className="site-title"
        aria-label="site title"
        style={{ color: " white" }}
      >
        Contact List
      </Link>
      <ul aria-label="navagation links">
        <li className="nav-link" aria-label="home link">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link" aria-label="create new contact link">
          <Link to="/create">Create New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
