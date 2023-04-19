import React from "react";

function UserReviewCard({ comment, workout, review, deleteReview }) {
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

  return (
    <>
      <h3>Workout:</h3>
      <p>{workout}</p>
      <h3>Review:</h3>
      <p>{comment}</p>
      <button>Edit Review</button>
      <button onClick={handleDelete} type="submit">
        Delete Review
      </button>
    </>
  );
}

export default UserReviewCard;
