import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyWorkouts from "./pages/MyWorkouts";
import CreateWorkout from "./pages/CreateWorkout";

function App() {
  const [user, setUser] = useState(null);
  const [allWorkouts, setAllWorkouts] = useState([]);

  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then((data) => setAllWorkouts(data));
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function addWorkout(newWorkout) {
    setAllWorkouts([...allWorkouts, newWorkout]);
  }

  function addReview(newReview) {
    console.log("newReview", newReview);
    setAllWorkouts((prevAllWorkouts) => {
      return prevAllWorkouts.map((workout) => {
        if (workout.id === newReview.workout_id) {
          return {
            ...workout,
            reviews: [...workout.reviews, newReview],
          };
        }
        return workout;
      });
    });
  }

  return (
    <>
      <NavBar setUser={setUser} />
      <h2>Welcome, {user.username}!</h2>
      <main>
        <Switch>
          <Route exact path="/">
            <Home allWorkouts={allWorkouts} addReview={addReview} user={user} />
          </Route>
          <Route path="/myworkouts">
            <MyWorkouts />
          </Route>
          <Route path="/createworkout">
            <CreateWorkout addWorkout={addWorkout} user={user} />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
