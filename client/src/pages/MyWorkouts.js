import React, { useEffect, useState } from "react";
import UserWorkoutCard from "../components/UserWorkoutCard";
function MyWorkouts() {
  const [userWorkouts, setUserWorkouts] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUserWorkouts(data.created_workouts));
  }, []);

  const userWorkoutArray = userWorkouts.map((userWorkout) => (
    <UserWorkoutCard
      key={userWorkout.id}
      title={userWorkout.title}
      workout={userWorkout.workout}
    />
  ));
  return (
    <>
      <h1>My Workouts</h1>
      <ul>{userWorkoutArray}</ul>
    </>
  );
}

export default MyWorkouts;
