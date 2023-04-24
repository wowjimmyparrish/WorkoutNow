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
    <div className="nav justify-content-end">
      <div className="navbar">
        <NavLink className="p-4 fs-3" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="p-4 fs-3" to="/myworkouts">
          My Workouts{" "}
        </NavLink>
        <NavLink className="p-4 fs-3" to="/myreviews">
          My Reviews
        </NavLink>
        <NavLink className="p-4 fs-3" to="/createworkout">
          Create Workout
        </NavLink>
        <button className="btn btn-primary" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
