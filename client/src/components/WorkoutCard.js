import React from "react";
import Reviews from "./Reviews";
import AddReview from "./AddReview";

function WorkoutCard({ workout, addReview }) {
  return (
    <>
      <h3>{workout.title}</h3>
      <p>{workout.workout}</p>
      {/* Fill out rest of workout data in JSX */}
      <Reviews
        reviews={workout.reviews}
        addReview={addReview}
        workout={workout}
      />
      <AddReview addReview={addReview} workout={workout} />
    </>
  );
}

export default WorkoutCard;
