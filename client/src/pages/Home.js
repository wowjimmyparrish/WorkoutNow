import React from "react";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts, addReview, filteredWorkouts }) {
  return (
    <div>
      <WorkoutList
        allWorkouts={allWorkouts}
        addReview={addReview}
        filteredWorkouts={filteredWorkouts}
      />
    </div>
  );
}

export default Home;
