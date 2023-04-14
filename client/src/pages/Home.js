import React from "react";
import WorkoutFilter from "../components/WorkoutFilter";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts, addReview, filteredWorkouts, setSearch }) {
  return (
    <>
      <WorkoutFilter setSearch={setSearch} />
      <WorkoutList
        allWorkouts={allWorkouts}
        addReview={addReview}
        filteredWorkouts={filteredWorkouts}
      />
    </>
  );
}

export default Home;
