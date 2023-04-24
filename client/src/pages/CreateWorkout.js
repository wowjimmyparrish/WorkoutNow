import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/user";

function CreateWorkout({ addWorkout }) {
  const [errors, setErrors] = useState([]);
  const { user } = useContext(UserContext);
  const [data, setData] = useState({
    user_id: user.id,
    title: "",
    focus: "",
    length: "",
    workout: "",
  });
  const history = useHistory();
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/workouts", requestOptions).then((r) => {
      if (r.ok) {
        r.json().then((data) => addWorkout(data), history.push("/"));
      } else {
        r.json().then((errorData) => setErrors(errorData.errors));
      }
    });
  }

  return (
    <div>
      <h2 className="text-center">CREATE WORKOUT</h2>
      <hr></hr>
      <p className="text-center">Please submit information below</p>
      <form className="d-flex align-items-center justify-content-center flex-column">
        <input
          className="my-2"
          style={{ width: "50%" }}
          type="text"
          placeholder="Title"
          value={data.title}
          required
          onChange={(e) => setData({ ...data, title: e.target.value })}
        ></input>
        <input
          className="my-2"
          style={{ width: "50%" }}
          type="text"
          placeholder="Focus: (Upper body, Lower body, etc)"
          value={data.focus}
          required
          onChange={(e) => setData({ ...data, focus: e.target.value })}
        ></input>
        <input
          className="my-2"
          style={{ width: "50%" }}
          type="text"
          placeholder="Length: (In Minutes 45, 60, 90, or 120)"
          value={data.length}
          required
          onChange={(e) => setData({ ...data, length: e.target.value })}
        ></input>
        <textarea
          className="my-2"
          style={{ width: "80%" }}
          type="text"
          placeholder="Workout"
          value={data.workout}
          required
          onChange={(e) => setData({ ...data, workout: e.target.value })}
        ></textarea>
        <br></br>
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Submit Now
        </button>
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default CreateWorkout;
