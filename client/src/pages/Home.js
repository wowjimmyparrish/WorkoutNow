import React from "react";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts, addReview, filteredWorkouts }) {
  return (
    <>
      <WorkoutList
        allWorkouts={allWorkouts}
        addReview={addReview}
        filteredWorkouts={filteredWorkouts}
      />
    </>
  );
}

export default Home;
