import React from "react";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview";

function Reviews({ reviews, addReview, workout, user }) {
  const reviewArray = reviews.map((review) => (
    <ReviewCard key={review.id} comment={review.comment} />
  ));

  return (
    <div id="review-list">
      <h1>Review List</h1>
      <ul>{reviewArray}</ul>
      <AddReview addReview={addReview} workout={workout} user={user} />
    </div>
  );
}

export default Reviews;
