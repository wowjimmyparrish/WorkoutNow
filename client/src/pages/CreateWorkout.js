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
        r.json().then((errorData) => setErrors(errorData.error));
      }
    });
  }

  return (
    <div>
      <h1>CREATE WORKOUT</h1>
      <hr></hr>
      <p>Please submit information below</p>
      <form className="pet-form">
        <input
          className="pet-input"
          type="text"
          placeholder="title"
          value={data.title}
          required
          onChange={(e) => setData({ ...data, title: e.target.value })}
        ></input>
        <input
          className="pet-input"
          type="text"
          placeholder="focus"
          value={data.focus}
          required
          onChange={(e) => setData({ ...data, focus: e.target.value })}
        ></input>
        <input
          className="pet-input"
          type="text"
          placeholder="length"
          value={data.length}
          required
          onChange={(e) => setData({ ...data, length: e.target.value })}
        ></input>
        <input
          className="pet-input"
          type="text"
          placeholder="workout"
          value={data.workout}
          required
          onChange={(e) => setData({ ...data, workout: e.target.value })}
        ></input>
        <br></br>
        <button onClick={handleSubmit} type="submit">
          Submit Now
        </button>
        <h3 style={{ color: "red" }}>{errors}</h3>
      </form>
    </div>
  );
}

export default CreateWorkout;
