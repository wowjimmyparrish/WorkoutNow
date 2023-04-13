import React from "react";
import WorkoutFilter from "../components/WorkoutFilter";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts, addReview, workouts, setSearch }) {
  return (
    <>
      <WorkoutFilter workouts={workouts} setSearch={setSearch} />
      <WorkoutList allWorkouts={allWorkouts} addReview={addReview} />
    </>
  );
}

export default Home;
