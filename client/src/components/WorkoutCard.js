import React from "react";
import Reviews from "./Reviews";

function WorkoutCard({ workout, addReview, user }) {
  return (
    <>
      <h3>{workout.title}</h3>
      <p>{workout.workout}</p>
      {/* Fill out rest of workout data in JSX */}
      <Reviews
        reviews={workout.reviews}
        addReview={addReview}
        workout={workout}
        user={user}
      />
      {/* Follow pattern from petCard and Comments */}
      {/* <Comments
        pet={pet}
        editComment={editComment}
        deleteComment={deleteComment}
      />
      <AddComment pet={pet} addComment={addComment} /> */}
    </>
  );
}

export default WorkoutCard;

// {
//     "id": 1,
//     "title": "Bicep Blaster",
//     "length": 45,
//     "focus": "Upper body",
//     "workout": "Concentration Curls 5 reps x 5 sets, Barbell Curls 5 reps x 5 sets, Hammer Curls 10 reps x 3 sets",
//     "reviews": [
//         {
//             "id": 1,
//             "comment": "Great workout!",
//             "rating": 5,
//             "workout_id": 1,
//             "user_id": 1
//         }
//     ],
//     "user": {
//         "id": 1,
//         "username": "jimmy",
//         "password_digest": "$2a$12$nUMSbxVK91JNi1zwjCMgBOyuPyXYI8wILNYHV9kjl0yu276Gt7T5W"
//     }
// }
