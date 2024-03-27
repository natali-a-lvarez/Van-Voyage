import logo from "../assets/logo.png";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <header>
      <Link to="..">
        <img className="logo" src={logo} alt="Van Voyage logo"></img>
      </Link>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link" activeClassName="active">
          Rent
        </NavLink>
        <NavLink to="/addVan" className="nav-link" activeClassName="active">
          List
        </NavLink>
      </nav>
    </header>
  );
}
