import React from "react";
import UserReviewCard from "../components/UserReviewCard";

function MyReviews({ deleteReview, userReviews, editReview }) {
  const userReviewArray = userReviews.map((userReview) => (
    <UserReviewCard
      key={userReview.id}
      workout={userReview.workout.title}
      review={userReview}
      deleteReview={deleteReview}
      editReview={editReview}
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
