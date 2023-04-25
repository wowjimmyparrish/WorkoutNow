import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/user";
import { NavLink } from "react-router-dom";
import WorkoutFilter from "../components/WorkoutFilter";

function NavBar({ setSearch, user }) {
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
      <h2 className="fs-4 position-absolute top-0 start-0 mt-2 ms-2">
        Welcome, {user.username}!
      </h2>
      <div className="navbar">
        <NavLink className="p-4 fs-5" to="/">
          Home{" "}
        </NavLink>
        <NavLink className="p-4 fs-5" to="/myworkouts">
          My Workouts{" "}
        </NavLink>
        <NavLink className="p-4 fs-5" to="/myreviews">
          My Reviews
        </NavLink>
        <NavLink className="p-4 fs-5" to="/createworkout">
          Create Workout
        </NavLink>
        <WorkoutFilter setSearch={setSearch} />
        <button className="btn btn-primary me-4" onClick={handleLogoutClick}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
