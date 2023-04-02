import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import MyWorkouts from "./MyWorkouts";
import CreateWorkout from "./CreateWorkout";

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

  return (
    <>
      <NavBar setUser={setUser} />
      <h2>Welcome, {user.username}!</h2>
      <main>
        <Switch>
          <Route exact path="/">
            <Home allWorkouts={allWorkouts} />
          </Route>
          <Route path="/myworkouts">
            <MyWorkouts />
          </Route>
          <Route path="/createworkout">
            <CreateWorkout />
          </Route>
        </Switch>
      </main>
    </>
  );
}
export default App;
