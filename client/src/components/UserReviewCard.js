import React, { useState } from "react";

function UserReviewCard({ workout, review, deleteReview, editReview }) {
  const [data, setData] = useState({
    id: review.id,
    comment: review.comment,
    workout_id: review.workout_id,
    user_id: review.user_id,
  });
  const [edit, setEdit] = useState(true);

  function handleEditClick(e) {
    e.preventDefault();
    setEdit(!edit);
  }

  function handleSaveClick(e) {
    e.preventDefault();
    handleEdit(data);
    setEdit(!edit);
  }

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(review),
  };

  function handleDelete(e) {
    e.preventDefault();
    fetch(`/reviews/${review.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(() => deleteReview(review));
  }

  function handleEdit() {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(`/reviews/${review.id}`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        editReview(res);
      });
  }

  return (
    <>
      <h3>Workout:</h3>
      <p>{workout}</p>
      <h3>Review:</h3>
      <form>
        {edit ? (
          <p>{data.comment}</p>
        ) : (
          <input
            type="text"
            placeholder="Comment"
            value={data.comment}
            disabled={edit}
            onChange={(e) =>
              setData({
                comment: e.target.value,
                id: review.id,
                workout_id: review.workout_id,
                user_id: review.user_id,
              })
            }
          ></input>
        )}
        <div>
          <button
            type="submit"
            onClick={edit ? handleEditClick : handleSaveClick}
          >
            {edit ? "Edit" : "Save"}
          </button>
          <button type="submit" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </>
  );
}

export default UserReviewCard;
