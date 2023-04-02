import React from "react";

function Home({ allWorkouts }) {
  const workoutArray = allWorkouts.map((workout) => console.log(workout));
  return (
    <>
      <h1>Workout list/Home</h1>
      <p>Make GET request to /workouts and console log data</p>
    </>
  );
}

export default Home;
