import React from "react";

function UserReviewCard({ comment }) {
  return (
    <>
      <p>{comment}</p>
      <h3>Workout:</h3>
      <button>Edit Comment</button>
      <button>Delete Comment</button>
    </>
  );
}

export default UserReviewCard;
