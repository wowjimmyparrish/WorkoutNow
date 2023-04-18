import React from "react";

function UserWorkoutCard({ userWorkout, title, deleteWorkout, workout }) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workout),
  };

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/workouts/${workout.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(() => deleteWorkout(workout));
  }

  return (
    <>
      <h2>{title}</h2>
      <p>{userWorkout}</p>
      <button onClick={handleDelete} type="submit">
        Delete Workout
      </button>
    </>
  );
}

export default UserWorkoutCard;
