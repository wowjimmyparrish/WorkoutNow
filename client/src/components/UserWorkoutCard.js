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
    <div className="card p-4 m-4 border-black">
      <h3>{title}</h3>
      <p>{userWorkout}</p>
      <div>
        <button className="btn btn-danger" onClick={handleDelete} type="submit">
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserWorkoutCard;
