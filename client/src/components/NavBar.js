import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <div>
      <div className="navbar">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/myworkouts">My Workouts </NavLink>
        <NavLink to="/createworkout">Create Workout</NavLink>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
