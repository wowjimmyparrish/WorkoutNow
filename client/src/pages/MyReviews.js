import React, { useState, useEffect } from "react";
import UserReviewCard from "../components/UserReviewCard";

function MyReviews() {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch("/users/:user_id/reviews")
      .then((r) => r.json())
      .then((data) => setUserReviews(data));
  }, []);

  const userReviewArray = userReviews.map((userReview) => (
    <UserReviewCard
      key={userReview.id}
      comment={userReview.comment}
      workout={userReview.workout.title}
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
