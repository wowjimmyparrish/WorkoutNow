import React from "react";

function UserReviewCard({ comment, workout }) {
  return (
    <>
      <p>{comment}</p>
      <h3>Workouts</h3>
      <p>-{workout}</p>
    </>
  );
}

export default UserReviewCard;
