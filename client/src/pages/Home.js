import React from "react";
import WorkoutFilter from "../components/WorkoutFilter";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts }) {
  return (
    <>
      <WorkoutFilter allWorkouts={allWorkouts} />
      <WorkoutList allWorkouts={allWorkouts} />
    </>
  );
}

export default Home;
