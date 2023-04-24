import React from "react";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

function WorkoutCard({ workout, addReview }) {
  return (
    <div className="card p-4 m-4">
      <h3>{workout.title}</h3>
      <h6>Focus: {workout.focus}</h6>
      <h6>Length in minutes: {workout.length}</h6>
      <h6 className="mb-2">Workout: {workout.workout}</h6>
      <Reviews reviews={workout.reviews} addReview={addReview} />
      <AddReview addReview={addReview} workout={workout} />
    </div>
  );
}

export default WorkoutCard;
