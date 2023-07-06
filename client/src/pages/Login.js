import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "../index.css";
function Login({ setUserWorkouts, setUserReviews }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1 className="text-center mt-5 fw-bolder">WorkoutNow</h1>
      <br></br>
      <br></br>
      <br></br>
      {showLogin ? (
        <>
          <LoginForm
            setUserWorkouts={setUserWorkouts}
            setUserReviews={setUserReviews}
          />
          <br></br>
          <p className="d-flex justify-content-center align-items-center">
            Don't have an account?
            <button
              className="btn btn-primary m-2"
              onClick={() => setShowLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p className="d-flex justify-content-center align-items-center">
            Already have an account?
            <button
              className="btn btn-primary m-2"
              onClick={() => setShowLogin(true)}
            >
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
