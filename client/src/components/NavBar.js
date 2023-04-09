import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";

function NavBar() {
  const { setUser } = useContext(UserContext);
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
        <NavLink to="/myreviews">My Reviews</NavLink>
        <NavLink to="/createworkout">Create Workout</NavLink>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;
