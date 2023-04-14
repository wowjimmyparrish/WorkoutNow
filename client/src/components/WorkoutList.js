import React from "react";
import WorkoutCard from "./WorkoutCard";

function WorkoutList({ allWorkouts, addReview, filteredWorkouts }) {
  // const workoutArray = allWorkouts.map((workout) => (
  //   <WorkoutCard key={workout.id} workout={workout} addReview={addReview} />
  // ));

  const workoutArray = filteredWorkouts.map((workout) => (
    <WorkoutCard key={workout.id} workout={workout} addReview={addReview} />
  ));

  return (
    <div id="workout-list">
      <h1>Workouts</h1>
      <ul>{workoutArray}</ul>
    </div>
  );
}

export default WorkoutList;
