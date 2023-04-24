import React from "react";
import UserWorkoutCard from "../components/UserWorkoutCard";
function MyWorkouts({ deleteWorkout, userWorkouts }) {
  const userWorkoutArray = userWorkouts.map((userWorkout) => (
    <UserWorkoutCard
      key={userWorkout.id}
      title={userWorkout.title}
      userWorkout={userWorkout.workout}
      deleteWorkout={deleteWorkout}
      workout={userWorkout}
    />
  ));
  return (
    <>
      <h1 className="text-center">My Workouts</h1>
      <ul>{userWorkoutArray}</ul>
    </>
  );
}

export default MyWorkouts;
