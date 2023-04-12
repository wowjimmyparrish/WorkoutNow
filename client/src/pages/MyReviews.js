import React, { useState, useEffect } from "react";
import UserReviewCard from "../components/UserReviewCard";

function MyReviews() {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((data) => setUserReviews(data.reviews));
  }, []);

  const userReviewArray = userReviews.map((userReview) => (
    <UserReviewCard key={userReview.id} comment={userReview.comment} />
  ));
  return (
    <>
      <h1>My Reviews</h1>
      <ul>{userReviewArray}</ul>
    </>
  );
}

export default MyReviews;
