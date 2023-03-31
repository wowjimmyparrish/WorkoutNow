import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/Login">Login/Signup </NavLink>
        <NavLink to="/My-Account">My Account </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
