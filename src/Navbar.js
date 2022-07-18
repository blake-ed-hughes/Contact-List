import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav" style={{borderBottom: "4px solid #83e2ff"}}>
      <Link to="/" className="site-title" style={{color: " white"}}>
        Contact List
      </Link>
      <ul>
        <li className="nav-link">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-link">
        <Link to="/create">Create New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
