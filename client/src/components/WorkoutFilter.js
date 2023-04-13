import React from "react";
import Search from "./Search";

function WorkoutFilter({ allWorkouts, setSearch }) {
  console.log("From workoutFilter component", allWorkouts);
  return (
    <>
      <Search setSearch={setSearch} />
    </>
  );
}
export default WorkoutFilter;
