import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;

//Routes-
//Signup - POST request to signup
//Login POST - request to login
//Movies (Homepage) - GET to all movies, POST/PATCH reviews, search/filter movies
//User/My Account - Get all reviews by user, search/filter movies to POST new review - If movie does not exist then POST new movie
