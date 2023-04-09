import React from "react";
import ReviewCard from "./ReviewCard";
import AddReview from "./AddReview";

function Reviews({ reviews, addReview, workout }) {
  const reviewArray = reviews.map((review) => (
    <ReviewCard key={review.id} comment={review.comment} />
  ));

  return (
    <div id="review-list">
      <h1>Review List</h1>
      <ul>{reviewArray}</ul>
      <AddReview addReview={addReview} workout={workout} />
    </div>
  );
}

export default Reviews;
