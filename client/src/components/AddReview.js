import { useState, useContext } from "react";
import { UserContext } from "../context/user";

function AddReview({ addReview, workout }) {
  const { user } = useContext(UserContext);
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState({
    comment: "",
    user_id: user.id,
    workout_id: workout.id,
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          addReview(data);
          setData({ comment: "", workout_id: workout.id, user_id: user.id });
        });
      } else {
        response.json().then((errorData) => {
          setErrors(errorData.errors.user_id);
          setData({ comment: "", workout_id: workout.id, user_id: user.id });
          //this clears the input after errors
        });
      }
    });
  }
  return (
    <div>
      <form className="comment-form">
        <input
          className="input"
          type="text"
          placeholder="Review"
          value={data.comment}
          onChange={(e) =>
            setData({
              comment: e.target.value,
              workout_id: workout.id,
              user_id: user.id,
            })
          }
        ></input>
        <button
          className="btn btn-primary m-2"
          type="submit"
          disabled={!data.comment}
          onClick={handleSubmit}
        >
          Submit
        </button>
        {errors.map((error) => (
          <p key={error} style={{ color: "red" }}>
            {error}
          </p>
        ))}
      </form>
    </div>
  );
}

export default AddReview;
