import React from "react";
import UserReviewCard from "../components/UserReviewCard";

function MyReviews({ deleteReview, userReviews }) {
  const userReviewArray = userReviews.map((userReview) => (
    <UserReviewCard
      key={userReview.id}
      comment={userReview.comment}
      workout={userReview.workout.title}
      review={userReview}
      deleteReview={deleteReview}
    />
  ));
  return (
    <>
      <h1>My Reviews</h1>
      <ul>{userReviewArray}</ul>
    </>
  );
}

export default MyReviews;
