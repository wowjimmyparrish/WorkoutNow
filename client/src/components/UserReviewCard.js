import React from "react";

function UserReviewCard({ comment, workout }) {
  return (
    <>
      <h3>Workout:</h3>
      <p>{workout}</p>
      <h3>Review:</h3>
      <p>{comment}</p>
      <button>Edit Review</button>
      <button>Delete Review</button>
    </>
  );
}

export default UserReviewCard;
