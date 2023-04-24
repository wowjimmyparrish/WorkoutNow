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
  const [userReviews, setUserReviews] = useState([]);

  // fetching user data
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          setUser(user);
          setUserWorkouts(user.created_workouts);
          setUserReviews(user.reviews);
        });
      }
    });
  }, [setUser]);

  //fetching all workouts
  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then((data) => setAllWorkouts(data));
  }, []);

  console.log(user);
  console.log(userWorkouts);
  console.log(userReviews);

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
    setUserReviews([...userReviews, newReview]);
  }

  function deleteReview(deletedReview) {
    //mapping through all workouts, if id matches deleted review id, then filter out deleted review
    setAllWorkouts((prevAllWorkouts) => {
      return prevAllWorkouts.map((workout) => {
        if (workout.id === deletedReview.workout_id) {
          const filteredReviews = workout.reviews.filter(
            (prevReview) => prevReview.id !== deletedReview.id
          );
          return {
            ...workout,
            reviews: filteredReviews,
          };
        }
        return workout;
      });
    });
    //filtering user review array
    const filterUserReviews = userReviews.filter(
      (review) => review.id !== deletedReview.id
    );
    setUserReviews(filterUserReviews);
  }

  //editing reviews
  function editReview(editedReview) {
    console.log("edited review", editedReview);
    setAllWorkouts((prevAllWorkouts) => {
      return prevAllWorkouts.map((workout) => {
        if (workout.id === editedReview.workout_id) {
          const filteredReviews = workout.reviews.filter(
            (prevReview) => prevReview.id !== editedReview.id
          );
          return {
            ...workout,
            reviews: [...filteredReviews, editedReview],
          };
        }
        return workout;
      });
    });
    const filterUserReviews = userReviews.filter(
      (review) => review.id !== editedReview.id
    );
    setUserReviews([...filterUserReviews, editedReview]);
  }

  const filteredWorkouts = allWorkouts.filter((workout) =>
    workout.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!user)
    return (
      <Login
        setUserWorkouts={setUserWorkouts}
        setUserReviews={setUserReviews}
      />
    );
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
            <MyReviews
              deleteReview={deleteReview}
              userReviews={userReviews}
              editReview={editReview}
            />
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
