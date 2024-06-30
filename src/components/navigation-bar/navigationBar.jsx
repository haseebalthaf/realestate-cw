import { Link, NavLink } from "react-router-dom";
import "../navigation-bar/navigationbar.css";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img className="navLogo" alt="website-logo" src="/images/logo.png" />
      </Link>
      <ul>
        <li>
          <NavLink className="navItem" to="/">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink className="navItem" to="/browse">
            Browse
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
