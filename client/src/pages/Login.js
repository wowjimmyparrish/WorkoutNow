import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>Workout Finder</h1>
      {showLogin ? (
        <>
          <LoginForm />
          <p>
            Don't have an account?
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm />
          <p>
            Already have an account?
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
