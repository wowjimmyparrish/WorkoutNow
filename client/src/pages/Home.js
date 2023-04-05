import React from "react";
import WorkoutFilter from "../components/WorkoutFilter";
import WorkoutList from "../components/WorkoutList";

function Home({ allWorkouts, addReview, user }) {
  return (
    <>
      <WorkoutFilter allWorkouts={allWorkouts} />
      <WorkoutList
        allWorkouts={allWorkouts}
        addReview={addReview}
        user={user}
      />
    </>
  );
}

export default Home;
