import React from "react";
import WorkoutCard from "./WorkoutCard";

function WorkoutList({ addReview, filteredWorkouts }) {
  const workoutArray = filteredWorkouts.map((workout) => (
    <WorkoutCard key={workout.id} workout={workout} addReview={addReview} />
  ));
  if (workoutArray.length === 0) {
    return (
      <div className="card p-4 m-4">
        <h2 className="m-auto text-danger">Workout not found</h2>
      </div>
    );
  } else
    return (
      <div id="workout-list">
        <h1 className="text-center fw-bolder">Workouts</h1>
        <ul>{workoutArray}</ul>
      </div>
    );
}

export default WorkoutList;
