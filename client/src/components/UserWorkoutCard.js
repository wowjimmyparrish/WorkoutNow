import React from "react";

function UserWorkoutCard({ workout, title }) {
  return (
    <>
      <h2>{title}</h2>
      <p>{workout}</p>
      <button>Delete Workout</button>
    </>
  );
}

export default UserWorkoutCard;
