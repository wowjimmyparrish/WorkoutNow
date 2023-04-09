import React from "react";
import WorkoutFilter from "../components/WorkoutFilter";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts, addReview }) {
  return (
    <>
      <WorkoutFilter allWorkouts={allWorkouts} />
      <WorkoutList allWorkouts={allWorkouts} addReview={addReview} />
    </>
  );
}

export default Home;
