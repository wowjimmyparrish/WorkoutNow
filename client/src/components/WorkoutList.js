import React from "react";
import WorkoutCard from "./WorkoutCard";

function WorkoutList({ allWorkouts, addReview }) {
  const workoutArray = allWorkouts.map((workout) => (
    <WorkoutCard key={workout.id} workout={workout} addReview={addReview} />
  ));

  return (
    <div id="workout-list">
      <h1>Workout List</h1>
      <ul>{workoutArray}</ul>
    </div>
  );
}

export default WorkoutList;
