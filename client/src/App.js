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
  const [search, setSearch] = useState("");
  const [userWorkouts, setUserWorkouts] = useState([]);

  //fetching all workouts
  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then((data) => setAllWorkouts(data));
  }, []);

  //fetching user data
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [setUser]);

  //fetching user workouts
  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUserWorkouts(data.created_workouts));
  }, []);

  function addWorkout(newWorkout) {
    //updated all workouts for home page
    setAllWorkouts([...allWorkouts, newWorkout]);
    //updated all user workouts for my workouts page
    setUserWorkouts([...userWorkouts, newWorkout]);
  }

  function deleteWorkout(deletedWorkout) {
    //update all workouts data
    const updatedWorkouts = allWorkouts.filter(
      (workout) => workout.id !== deletedWorkout.id
    );
    setAllWorkouts(updatedWorkouts);

    //update my workouts data
    const updatedUserWorkouts = userWorkouts.filter(
      (workout) => workout.id !== deletedWorkout.id
    );
    setUserWorkouts(updatedUserWorkouts);
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

  const filteredWorkouts = allWorkouts.filter((workout) =>
    workout.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) return <Login />;
  return (
    <>
      <NavBar />
      <h2>Welcome, {user.username}!</h2>
      <main>
        <Switch>
          <Route exact path="/">
            <Home
              allWorkouts={allWorkouts}
              addReview={addReview}
              filteredWorkouts={filteredWorkouts}
              setSearch={setSearch}
            />
          </Route>
          <Route path="/myworkouts">
            <MyWorkouts
              deleteWorkout={deleteWorkout}
              userWorkouts={userWorkouts}
            />
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
