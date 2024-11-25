import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about-us">About us</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
