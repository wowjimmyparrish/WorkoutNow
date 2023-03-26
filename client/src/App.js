import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//Routes-
//Signup - POST request to signup
//Login POST - request to login
//Movies (Homepage) - GET to all movies, POST/PATCH reviews, search/filter movies
//User/My Account - Get all reviews by user, search/filter movies to POST new review - If movie does not exist then POST new movie
