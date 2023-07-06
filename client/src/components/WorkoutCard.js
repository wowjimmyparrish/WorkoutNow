import React from "react";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

function WorkoutCard({ workout, addReview }) {
  return (
    <div className="card p-4 m-4 border-black">
      <h3>{workout.title}</h3>
      <h6>Focus: </h6>
      <p className="fst-italic">{workout.focus}</p>
      <h6>Length (Minutes):</h6> <p className="fst-italic">{workout.length}</p>
      <h6 className="mb-2">Workout: </h6>
      <p className="fst-italic">{workout.workout}</p>
      <div className="border-top border-black">
        <Reviews reviews={workout.reviews} addReview={addReview} />
        <AddReview addReview={addReview} workout={workout} />
      </div>
    </div>
  );
}

export default WorkoutCard;
