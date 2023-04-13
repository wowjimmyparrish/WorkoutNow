import React from "react";
import ReviewCard from "./ReviewCard";

function Reviews({ reviews }) {
  const reviewArray = reviews.map((review) => (
    <ReviewCard key={review.id} comment={review.comment} />
  ));

  return (
    <div id="review-list">
      <h2>Reviews</h2>
      <ul>{reviewArray}</ul>
    </div>
  );
}

export default Reviews;
