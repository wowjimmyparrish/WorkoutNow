import React from "react";

function UserReviewCard({ comment, workout }) {
  return (
    <>
      <p>{comment}</p>
      <h3>Workout:</h3>
      <p>{workout}</p>
      <button>Edit Comment</button>
      <button>Delete Comment</button>
    </>
  );
}

export default UserReviewCard;
