import React from "react";
import { useState, useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyWorkouts from "./pages/MyWorkouts";
import MyReviews from "./pages/MyReviews";
import CreateWorkout from "./pages/CreateWorkout";
import { UserContext } from "./context/user";

function App() {
  const { user, setUser } = useContext(UserContext);
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
  }, [setUser]);
  if (!user) return <Login />;

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
      <NavBar />
      <h2>Welcome, {user.username}!</h2>
      <main>
        <Switch>
          <Route exact path="/">
            <Home allWorkouts={allWorkouts} addReview={addReview} />
          </Route>
          <Route path="/myworkouts">
            <MyWorkouts />
          </Route>
          <Route path="/myreviews">
            <MyReviews />
          </Route>
          <Route path="/createworkout">
            <CreateWorkout addWorkout={addWorkout} />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
