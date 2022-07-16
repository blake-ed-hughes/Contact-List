import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Contact List
      </Link>
      <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/create">Create New</Link>
        </li>
        {/* <li>
        <Link to="/edit">Edit</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
